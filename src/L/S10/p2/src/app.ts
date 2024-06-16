/* 
All dom moanipulation is being done with OOP 
*/

import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// This import for your testing
import { mainHead } from "../../../../../UTILS/text.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

mainHead("Import Test with js in typescript");
