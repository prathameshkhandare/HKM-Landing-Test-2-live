/**
 * Cloudinary Upload Utilities
 * Handles frontend image upload to Cloudinary with validation
 */

const CLOUDINARY_CLOUD_NAME = 'dt7lkefnh';
const CLOUDINARY_UPLOAD_PRESET = 'icvk_unsigned';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// Allowed file types
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes

export interface ValidationError {
  isValid: false;
  error: string;
}

export interface ValidationSuccess {
  isValid: true;
}

export type ValidationResult = ValidationError | ValidationSuccess;

/**
 * Validates image file before upload
 * @param file - File to validate
 * @returns Validation result with error message if invalid
 */
export function validateImageFile(file: File): ValidationResult {
  // Check file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Invalid file type. Please upload JPG, JPEG, PNG, or WEBP images only.'
    };
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    return {
      isValid: false,
      error: `File size (${sizeMB}MB) exceeds the maximum limit of 3MB. Please choose a smaller image.`
    };
  }

  return { isValid: true };
}

export interface CloudinaryUploadSuccess {
  success: true;
  url: string;
}

export interface CloudinaryUploadError {
  success: false;
  error: string;
}

export type CloudinaryUploadResult = CloudinaryUploadSuccess | CloudinaryUploadError;

/**
 * Uploads image to Cloudinary
 * @param file - Image file to upload
 * @returns Cloudinary secure URL or error
 */
export async function uploadToCloudinary(file: File): Promise<CloudinaryUploadResult> {
  try {
    // Validate file first
    const validation = validateImageFile(file);
    if (!validation.isValid) {
      return {
        success: false,
        error: validation.error
      };
    }

    // Create FormData for Cloudinary upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'icvk/registrations'); // Backend requires this folder

    // Upload to Cloudinary with timing
    console.log(`⏱️ Starting upload: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);
    const startTime = performance.now();
    
    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    console.log(`✅ Upload completed in ${duration}s`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error?.message || 'Failed to upload image. Please try again.'
      };
    }

    const data = await response.json();
    
    // Extract secure_url from response
    if (!data.secure_url) {
      return {
        success: false,
        error: 'Upload succeeded but no URL was returned. Please try again.'
      };
    }

    console.log(`🔗 Cloudinary URL: ${data.secure_url}`);

    return {
      success: true,
      url: data.secure_url
    };

  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return {
      success: false,
      error: 'Network error during upload. Please check your connection and try again.'
    };
  }
}
