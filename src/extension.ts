// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	console.log('Congratulations, your extension "sdt-lab3" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const ifCommand = vscode.commands.registerCommand('sdt-lab3.if-gener', () => {
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'if () {\n\t\n}');
			});
		}
	});
	const elseCommand = vscode.commands.registerCommand('sdt-lab3.else-gener', () => {
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'else {\n\t\n}');
			});
		}
	});
	const ifelseCommand = vscode.commands.registerCommand('sdt-lab3.if-else-gener', () => {
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'if () {\n\t\n} else {\n\t\n}');
			});
		}
	});
	const forCommand = vscode.commands.registerCommand('sdt-lab3.for-gener', () => {
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'for (; ; ) {\n\t\n}');
			});
		}
	});
	const whileCommand = vscode.commands.registerCommand('sdt-lab3.while-gener', () => {
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'while () {\n\t\n}');
			});
		}
	});

	context.subscriptions.push(ifCommand, elseCommand, ifelseCommand,forCommand, whileCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
