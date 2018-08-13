!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:t})},e.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=2)}([function(r,n,e){r.exports=e(1)},function(r,n){!function(r,n){for(var e in n)r[e]=n[e]}(n,function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:t})},e.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=4)}([function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function r(){}return r.deepClone=function(r){return JSON.parse(JSON.stringify(r))},r.makeGridFromString=function(r){return new Array(9).fill(0).map(function(n,e){return new Array(9).fill(0).map(function(n,t){return+r.charAt(9*e+t)})})},r.getUniverseFromGrid=function(r){return r.map(function(r){return r.map(function(r){return 0===r?new Array(9).fill(0).map(function(r,n){return n+1}):[r]})})},r.getUniverseFromEmptyGrid=function(){return new Array(9).fill(0).map(function(){return new Array(9).fill(0).map(r.MakeNewA19)})},r.getUniverseSize=function(n){return r.sum(n.map(function(r){return r.map(function(r){return r.length})}).map(function(n){return r.sum(n)}))},r.sum=function(r){return r.reduce(function(r,n){return r+n},0)},r.getSquareList=function(r){for(var n=[],e=function(e){var t=[],o=Math.floor(e/3),u=e%3;[0,1,2].forEach(function(n){return[0,1,2].forEach(function(e){return t.push(r[3*o+n][3*u+e])})}),n.push(t)},t=0;t<9;t++)e(t);return n},r.MakeNewA19=function(){return new Array(9).fill(0).map(function(r,n){return n+1})},r}();n.Util=t},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),o=function(){function r(){}return r.getLevel=function(r){return r.map(function(r){return r.map(function(r){return r.length}).reduce(function(r,n){return r+n},0)}).reduce(function(r,n){return r+n},0)},r.removeRowDuplicate=function(r){r.forEach(function(r){var n=r.reduce(function(r,n){return 1===n.length&&r.push(n[0]),r},[]);r.forEach(function(r){r.length>1&&n.forEach(function(n){var e=r.indexOf(n);-1!==e&&r.splice(e,1)})})})},r.removeColDuplicate=function(n){var e=function(r){for(var n=[],e=0;e<9;e++){for(var t=[],o=0;o<9;o++)t.push(r[o][e]);n.push(t)}return n}(n);r.removeRowDuplicate(e)},r.removeSquareDuplicate=function(n){var e=t.Util.getSquareList(n);r.removeRowDuplicate(e)},r}();n.HumanSolver=o},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.backtracker=function(r){for(var n=[],e=r.getSolutionStructure(),t=0,o=0,u=r.universe,i=JSON.parse(JSON.stringify(r.universe));;){if(r.maxIteration>0&&++t>r.maxIteration)throw new Error("maxIteration reached.");if(-1===o){if("find-all"===r.strategy)break;throw new Error("it seems that the backtracking cannot find a solution.")}var a=r.getPossibilities(u,o);if(0!==a.length){var c=r.pop(a);if(r.setSolution(e,o,c),r.checkSolution(e,o)&&++o===r.length){if("find-first"===r.strategy)break;if("find-all"===r.strategy){var f=JSON.parse(JSON.stringify(e));if(n.push(f),n.length>=r.max)break;o--;continue}}}else r.resetSolution(e,o),r.resetPossibilities(a,o,i),o--}return"find-first"===r.strategy?e:"find-all"===r.strategy?n:void 0}},function(r,n,e){"use strict";var t=this&&this.__assign||Object.assign||function(r){for(var n,e=1,t=arguments.length;e<t;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r};Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),u=e(1),i=e(0);function a(r){if(0===r.length)throw new Error("cannot pop from an empty array");var n=Math.floor(Math.random()*r.length),e=r[n];return r.splice(n,1),e}function c(r){return{x:Math.floor(r/9),y:r%9}}var f={getSolutionStructure:function(){return new Array(9).fill(0).map(function(){return new Array(9).fill(0)})},universe:new Array(9).fill(0).map(function(){return new Array(9).fill(0).map(i.Util.MakeNewA19)}),getPossibilities:function(r,n){var e=c(n);return r[e.x][e.y]},resetPossibilities:function(r,n,e){var t=c(n);e[t.x][t.y].forEach(function(n){return r.push(n)})},resetSolution:function(r,n){var e=c(n);r[e.x][e.y]=0},setSolution:function(r,n,e){var t=c(n);r[t.x][t.y]=e},checkSolution:function(r,n){var e=c(n);return function(r,n,e){return function(r,n,e){return r[n].indexOf(r[n][e])===e}(r,n,e)&&function(r,n,e){return r.map(function(r){return r[e]}).indexOf(r[n][e])===n}(r,n,e)&&function(r,n,e){var t=r[n][e],o=Math.floor(n/3),u=Math.floor(e/3),i=r.slice(3*o,3*o+3).map(function(r){return r.slice(3*u,3*u+3)});return i[n%3][e%3]=0,-1===i.reduce(function(r,n){return r.concat(n)},[]).indexOf(t)}(r,n,e)}(r,e.x,e.y)},pop:function(r){return a(r)},strategy:"find-first",max:2,length:81},l=function(){function r(){}return r.from=function(r){return i.Util.makeGridFromString(r)},r.generate=function(){return f.universe=i.Util.getUniverseFromEmptyGrid(),o.backtracker(f)},r.naiveCarve=function(n,e){for(var t,o=0;;){t=JSON.parse(JSON.stringify(n));for(var u=new Array(81).fill(0).map(function(r,n){return{r:Math.floor(n/9),c:n%9}}),i=0;i<e;i++){var c=a(u);t[c.r][c.c]=0}if(r.checkOneSolution(t))break;o++}return console.log("found in %d iterations",o),t},r.checkOneSolution=function(n){return 1===r.getAllSolution(n).length},r.getAllSolution=function(n){var e=i.Util.getUniverseFromGrid(n);e=r.humanSolve(e);var u=t({},f,{universe:e,strategy:"find-all",max:2,length:81});return o.backtracker(u)},r.humanSolve=function(r){var n,e=i.Util.deepClone(r),t=i.Util.getUniverseSize(e);do{n=t,u.HumanSolver.removeRowDuplicate(e),u.HumanSolver.removeColDuplicate(e),u.HumanSolver.removeSquareDuplicate(e),t=i.Util.getUniverseSize(e)}while(t<n);return e},r.carve=function(n,e){return r.btcarve(n,e)},r.btcarve=function(n,e){for(var t=function(){try{var t,u={getSolutionStructure:function(){return[]},universe:new Array(e).fill(0).map(function(){return new Array(81).fill(0).map(function(r,n){return{row:Math.floor(n/9),col:n%9}})}),getPossibilities:function(r,n){return r[n]},resetPossibilities:function(r,n,e){e[n].forEach(function(n){return r.push(n)})},resetSolution:function(r,n){r.pop()},setSolution:function(r,n,e){r.length!==n?r.length!==n-1||r.push(e):r[n-1]=e},checkSolution:function(e,o){var u=e[o-1];return e.findIndex(function(r){return r.row===u.row&&r.col===u.col})===o-1&&(t=JSON.parse(JSON.stringify(n)),e.forEach(function(r){t[r.row][r.col]=0}),r.checkOneSolution(t))},pop:function(r){return a(r)},strategy:"find-first",maxIteration:500,length:e},i=o.backtracker(u);if(t=JSON.parse(JSON.stringify(n)),i.forEach(function(r){t[r.row][r.col]=0}),!r.checkOneSolution(t))throw new Error("I am buggy");return{value:t}}catch(r){console.log("e",r.message)}};;){var u=t();if("object"==typeof u)return u.value}},r}();n.SudokuSolver=l},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(3);n.SudokuSolver=t.SudokuSolver}]))},function(r,n,e){"use strict";e.r(n);var t=e(0);onmessage=function(r){const n=t.SudokuSolver.generate(),e=t.SudokuSolver.carve(n,r.data);postMessage({solution:n,masked:e})}}]);