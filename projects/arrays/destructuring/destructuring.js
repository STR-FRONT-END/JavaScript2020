const weasleyKids = [
    "Charlie",
    "Bill",
    "Percy",
    "Fred",
    "George",
    "Ron",
    "Ginny"
  ]
 const [kid0, kid1, kid2, kid3, kid4, kid5, kid6, kid7] = weasleyKids;
  console.log("kid1: ", kid1);// Bill
  console.log("kid6: ", kid6);// Ginny
  console.log("kid7:", kid7);// undefined
  const weasleyParents = ["Molly", "Arthur"];
  //spread operator- creates a copy
  const weasleyFamily = [...weasleyKids, ...weasleyParents];
  console.log("weasleyFamily: ", weasleyFamily);

  ```
  'weasleyFamily: ' [
    'Charlie', 'Bill',
    'Percy',   'Fred',
    'George',  'Ron',
    'Ginny',   'Molly',
    'Arthur'
  ]
  ```

  let weasleyFamily2 = [...weasleyKids, ...weasleyParents];
  weasleyKids.push("Other Kid");
  weasleyFamily2 = [...weasleyKids, ...weasleyParents];
  console.log("weasleyFamily2: ", weasleyFamily2);
  ```
  'weasleyFamily2: ' [
    'Charlie', 'Bill',
    'Percy',   'Fred',
    'George',  'Ron',
    'Ginny',   'Other Kid',
    'Molly',   'Arthur'
  ]
  ```