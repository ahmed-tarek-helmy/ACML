# More aggressive regex-based removal script
$basePath = 'c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/src/pages/Publishers'

Get-ChildItem -Path $basePath -Filter "*.tsx" -Recurse | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    # Match various patterns of the Back to Publishers link
    $patterns = @(
        # Pattern 1: Standard Link with ArrowLeft
        '(?s)\s*<Link\s+to="/publishers"\s+className="[^"]*"\s*>\s*<ArrowLeft[^>]*>\s*/>\s*Back to Publishers\s*</Link>\s*',
        # Pattern 2: Link with span wrapper
        '(?s)\s*<Link\s+to="/publishers"\s+className="[^"]*"\s*>\s*<ArrowLeft[^>]*>\s*/>\s*<span[^>]*>Back to Publishers</span>\s*</Link>\s*',
       # Pattern 3: Generic removal
        '(?s)\s*<Link[^>]*to="/publishers"[^>]*>[\s\S]*?Back to Publishers[\s\S]*?</Link>\s*'
    )
    
    $originalContent = $content
    foreach ($pattern in $patterns) {
        $content = $content -replace $pattern, ''
    }
    
    if ($originalContent -ne $content) {
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Removed back link from: $($_.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Cyan
