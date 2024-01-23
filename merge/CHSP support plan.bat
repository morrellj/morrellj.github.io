Powershell.exe Unblock-File -Path 'C:\Users\jmorrell\OneDrive - Southern Cross Care (WA) Inc\spreadsheets\ALClientData.csv'
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)
timeout /t 2
start "" "CHSP Client Support Plan.docx"
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)