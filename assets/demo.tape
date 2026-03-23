# fallow demo — README GIF
# Regenerate: cd assets && vhs demo.tape

Output screenshots/fallow-demo.gif

Set Shell "zsh"
Set FontFamily "JetBrains Mono"
Set FontSize 16
Set Width 900
Set Height 780
Set Padding 20
Set Theme "Catppuccin Mocha"
Set WindowBar Colorful
Set WindowBarSize 40
Set TypingSpeed 50ms
Set CursorBlink false

# Set up: PATH, working directory, clean prompt, clear cache
Hide
Type@0ms "export PATH=/Users/bartwaardenburg/Sites/fallow/target/release:$PATH"
Enter
Sleep 200ms
Type@0ms "cd /Users/bartwaardenburg/Sites/fallow/assets/demo-project && rm -rf .fallow"
Enter
Sleep 200ms
Type@0ms "export PS1='~/my-app $ '"
Enter
Sleep 200ms
Type@0ms "clear"
Enter
Sleep 500ms
Show

# Run fallow check
Type "fallow check"
Sleep 400ms
Enter
Sleep 3500ms
