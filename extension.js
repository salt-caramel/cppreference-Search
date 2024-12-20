// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('cppreference-search.cppreferncesearch', function () {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;
		const selectionText = editor.selection
		const text = editor.document.getText(selectionText);
		

		vscode.env.openExternal("http://en.cppreference.com/mwiki/index.php?title=Special%3ASearch&search="+text.replace(" ","+"));

		// Display a message box to the user
		vscode.window.showInformationMessage('Search  in cppreference');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
