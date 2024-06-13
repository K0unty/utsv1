/* 
106: A first Class Decorator
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(
    `
  %c${text}
  `,
    "background:black"
  );
};

// ---

console.log(
  `
  %cS8 - 106: A first Class Decorator `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her
