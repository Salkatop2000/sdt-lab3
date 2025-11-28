// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// принимает контекст, в котором работает данный плагин, ничего не возвращает
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// принимает текст выводимого сообщения, ничего не возвращает
	console.log('Congratulations, your extension "sdt-lab3" is now active!');

	// принимает на вход внутренне название команды и функцию, вызываемую по этой команде
	// возвращает объект команды
	// регистрирует команду для дальнейшего использования
	const ifCommand = vscode.commands.registerCommand('sdt-lab3.if-gener', () => {
		// регистрирует команду для ганерации блока if
		// Ничего не получает на вход, ничего не возвращает
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'if () {\n\t\n}');
			});
		}
	});

	// принимает на вход внутренне название команды и функцию, вызываемую по этой команде
	// возвращает объект команды
	// регистрирует команду для дальнейшего использования
	const elseCommand = vscode.commands.registerCommand('sdt-lab3.else-gener', () => {
		// регистрирует команду для ганерации блока else
		// Ничего не получает на вход, ничего не возвращает
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'else {\n\t\n}');
			});
		}
	});

	// принимает на вход внутренне название команды и функцию, вызываемую по этой команде
	// возвращает объект команды
	// регистрирует команду для дальнейшего использования
	const ifelseCommand = vscode.commands.registerCommand('sdt-lab3.if-else-gener', () => {
		// регистрирует команду для ганерации блока if-else
		// Ничего не получает на вход, ничего не возвращает
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'if () {\n\t\n} else {\n\t\n}');
			});
		}
	});

	// принимает на вход внутренне название команды и функцию, вызываемую по этой команде
	// возвращает объект команды
	// регистрирует команду для дальнейшего использования
	const forCommand = vscode.commands.registerCommand('sdt-lab3.for-gener', () => {
		// регистрирует команду для ганерации блока for
		// Ничего не получает на вход, ничего не возвращает
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'for (; ; ) {\n\t\n}');
			});
		}
	});

	// принимает на вход внутренне название команды и функцию, вызываемую по этой команде
	// возвращает объект команды
	// регистрирует команду для дальнейшего использования
	const whileCommand = vscode.commands.registerCommand('sdt-lab3.while-gener', () => {
		// регистрирует команду для ганерации блока while
		// Ничего не получает на вход, ничего не возвращает
		const gener = vscode.window.activeTextEditor;
		if (gener) {
			gener.edit(generator => {
				generator.insert(gener.selection.active, 'while () {\n\t\n}');
			});
		}
	});

	// добавляет зарегистрированные команды в массив subscriptions в context
	// принимает на вход команды, ничего не возвращает
	context.subscriptions.push(ifCommand, elseCommand, ifelseCommand,forCommand, whileCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
