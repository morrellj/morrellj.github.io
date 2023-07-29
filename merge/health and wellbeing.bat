Powershell.exe Unblock-File -Path 'C:\Users\jmorrell\OneDrive - Southern Cross Care (WA) Inc\spreadsheets\ALClientData.csv'
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)
timeout /t 2
start "" "HC - Health _ Wellbeing Assessment.DOCX"
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)