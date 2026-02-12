$files = @(
    'PublisherBloomsbury.tsx',
    'PublisherESDU.tsx',
    'PublisherGlobalTradeTracker.tsx',
    'PublisherHarmattan.tsx',
    'PublisherICAO.tsx',
    'PublisherILS.tsx',
    'PublisherIntermat.tsx',
    'PublisherJanes.tsx',
    'PublisherJaypee.tsx',
    'PublisherLibraryOfCongress.tsx',
    'PublisherMilitarySpecifications.tsx',
    'PublisherOCLC.tsx',
    'PublisherPressReader.tsx',
    'PublisherPrimalPictures.tsx',
    'PublisherPTC.tsx',
    'PublisherSAE.tsx',
    'PublisherStandardsSocieties.tsx',
    'PublisherTaylorFrancis.tsx',
    'PublisherThieme.tsx',
    'PublisherSIAM.tsx',
    'PublisherNFPA.tsx',
    'PublisherLibrarian.tsx',
    'PublisherHeinOnline.tsx',
    'PublisherHannecke.tsx',
    'PublisherHaystack.tsx',
    'PublisherGaylord.tsx',
    'PublisherFairplay.tsx',
    'PublisherEBSCOMilitary.tsx',
    'PublisherEndNote.tsx',
    'PublisherEBSCODatabases.tsx',
    'PublisherEbsco.tsx',
    'PublisherCABI.tsx',
    'PublisherDemco.tsx',
    'PublisherAVDATA.tsx',
    'PublisherASNT.tsx',
    'PublisherArcticSecurity.tsx',
    'PublisherAIP.tsx',
    'Publisher3BScientific.tsx',
    'ChemWatch\ChemwatchMaster.tsx'
)

$basePath = 'c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/src/pages/Publishers'

foreach ($file in $files) {
    $filePath = Join-Path $basePath $file
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Remove the Link block with "Back to Publishers"
        $pattern = '(?s)\s*<Link\s+to="/publishers"[^>]*>\s*<ArrowLeft[^>]*>\s*/>\s*(?:Back to Publishers|<span[^>]*>Back to Publishers</span>)\s*</Link>\s*'
        $content = $content -replace $pattern, ''
        
        # Also remove standalone container divs that might be empty now
        $content = $content -replace '(?s)\s*<div className="container mx-auto px-4 pt-4">\s*</div>\s*', ''
        
        # Remove ArrowLeft from imports if it's there and not used elsewhere
        if ($content -notmatch 'ArrowLeft[^,]*\/>') {
            $content = $content -replace ',?\s*ArrowLeft\s*,?', ''
            # Clean up double commas
            $content = $content -replace ',\s*,', ','
            # Clean up trailing/leading commas in imports
            $content = $content -replace '{\s*,', '{'
            $content = $content -replace ',\s*}', '}'
        }
        
        # Write back to file
        [System.IO.File]::WriteAllText($filePath, $content)
        Write-Host "Processed: $file" -ForegroundColor Green
    } else {
        Write-Host "File not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nCompleted removing Back to Publishers links from all files!" -ForegroundColor Cyan
