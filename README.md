BOOKING APP

Booking app is a simple Frontend only authentication app built with React Native CLI.



INSTALLATION

After you have successfully cloned the app from the git repository, open the terminal in your code editor of choice and run the following command to build for ios simulators.

	pod install
	npx react-native run-ios
	
	

SAFETY TIPS

After the current ios update, you may encounter a permission issue with watchman while trying to build the app.

Some solutions on Stack overflow suggest giving watchman "Full Disk Access" in your system preferences to enable it work.

or you can downgrade to a lower version of watchman by running the following commands.

	brew uninstall watchman

	curl https://raw.githubusercontent.com/Homebrew/homebrew-core/8651d8e23d308e564414188509f864e40548f514/Formula/watchman.rb > /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/watchman.rb

	brew install watchman

	brew pin watchman

	cd /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula

	git checkout
  
