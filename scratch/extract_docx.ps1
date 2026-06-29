$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('E:\talentroanut -data\hkm-images\new data today new\Sri_Shyamananda_Prabhu_Blog_CORRECTED.docx')
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
$text | Out-File -FilePath 'e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\scratch\shyamananda_ref.txt' -Encoding UTF8
