Powershell.exe Unblock-File -Path 'C:\Users\jmorrell\OneDrive - Southern Cross Care (WA) Inc\spreadsheets\ALClientData.csv'
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)
timeout /t 2
start "" "HCP Client Care Plan (current) Blank Template.docx"
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)