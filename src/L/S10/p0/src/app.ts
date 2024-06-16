/* 
All dom moanipulation is being done with OOP 
*/

/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-items.ts" />
/// <reference path="components/project-list.ts" />
namespace App {
  // Project Input Class - Fro rendering the form using TS

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
