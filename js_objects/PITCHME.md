# JavaScript Objects {data-background-color=#7E317B}

---

## Collection of properties

Each property is named (with a key) and has a value

In object literal notation (like JavaScript Object Notation (JSON)) we can write

```
let pet = {height: 0.76, weight: 80, species: "goat"};
```

---

## obj.prop

Access properties like this

```
let coatLength = pet.height;
pet.weight += 5;
pet["colour"] = "red"; // no declaration required

```

---

## Function-valued properties

Object properties can be any type, including functions

```
pet.draw = function(){ alert("I am a pet");}
pet.draw();
```

---

## this

`this` refers to the object it was called on

```
pet.draw = function(){
    alert("I am a pet this big: " + this.height);
}
pet.draw();

```

---
## of and in

In a `for` loop over a list you can use `of`
```
for (let x of [1,2,3]){console.log(x)};
```

In a `for` loop over an object you can use `in` (gives keys)
```
const me = {name: 'Steven', game: 'Lecturer'};
for(let k in me){
    console.log('I have a ' + k);
    console.log('It is ' + me[k]);
}
```

---

## Prototypal Inheritance

::: incremental

- Every object has a property `__proto__` which refers to another object
- If a property isn't found in an object's own properties, then `__proto__` is checked
- Every function has a property `prototype` which is used when creating an object
- The `new` keyword is used with a constructor function to create an object and set its `__proto__`
- Read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

:::

---

## Inheriting behaviour

::: incremental

- In other languages (e.g Java, C#) every object belongs to a *class*
    - Data values (fields) are associated with objects
    - Behaviour (methods) are associated with classes
- Things of the same type (class) can do the same things
- JS is more flexible: each object can define its own behaviour
- JS allows inheritance (common behaviour) through prototypes

:::

---

- Java uses *class-based inheritance*
- JS use *prototypal inheritance*


---

## Emulating classes in JS

[Simple syntax for constructors and prototype functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```
class Pet{
   constructor(h, w, s){
      this.height = h;
      this.weight = w;
      this.species = s;
   }
   draw(){
       alert("I am a pet this big: " + this.height);
   }
}
let p = new Pet(0.76, 80, "goat");
p.draw();

```

---

## Why classes?

::: incremental

- Reduces cut-and-paste: eases maintenance
- Encourages *encapsulation*: hide the details so they can be changed easily
- No global variables: no clashes
- Make reusable components with classes
- Reuse in the same project (multiple pets) or in different projects

:::

---

## git revisited: basic branching

::: incremental

- create a branch with `git branch iss52`
- check it out with `git checkout iss52`
- do some work, `add` and `commit`
- go back to the main branch: `git checkout main`
- merge your branch: `git merge iss52`
- delete your branch: `git branch -d iss52`

:::

---

## What is the point of all that?

- Different people can work on different features
- Before merging you can update with `git pull`
- Automatically merges and identifies issues
- See also [`git rebase`](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

---

# Next time 

JavaScript and the DOM