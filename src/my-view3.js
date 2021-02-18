/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from "lit-element";
import "./shared-styles.js";

class MyView3 extends LitElement {
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  static get properties() {
    return {
      tasks: { type: Array },
      DictionarySort: {},
    };
  }
  constructor() {
    super();

    this.tasks = [];
    this.DictionarySort = {
      34: "thirty-four",
      90: "ninty",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    };
  }

  render() {
    const getFetch = async (e) => {
      e.preventDefault();
      console.log("Fetching data");
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      let data = await res.json();
      console.log(data);
      this.tasks = [...data];
      console.log(this.tasks);
    };
    const updateTaskStatus = (taskToUpdate, status) => {
      this.tasks = this.tasks.map((task) => {
        if (taskToUpdate.title === task.title) {
          return { ...taskToUpdate, completed: status };
        } else {
          return task;
        }
      });
      console.log(this.tasks);
    };
    let sort = Object.entries(this.DictionarySort).sort((a, b) => {
      if (Number.isNaN(parseInt(a[0])) || Number.isNaN(parseInt(b[0]))) {
        console.log("found NAN");
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
      }
      return parseInt(a[0]) - parseInt(b[0]);
    });
    console.log(sort);

    let sortobj = Object.fromEntries(sort);

    console.log(sortobj);
    // let sortAlpha = Object.entries(this.DictionarySort).sort((a, b) => {
    //   if (a[1] > b[1]) return 1;
    //   else if (a[1] < b[1]) return -1;
    //   else return 0;
    // });
    //  console.log(sortAlpha);

    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        my-view3 .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        my-view3 .circle {
          display: inline-block;
          width: 64px;
          height: 64px;
          text-align: center;
          color: #555;
          border-radius: 50%;
          background: #ddd;
          font-size: 30px;
          line-height: 64px;
        }
        my-view3 .container {
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: space-between;
          grid-gap: 20px;
        }
      </style>
      ${this.tasks.length > 0
        ? this.tasks.map((task) => {
            return html`
              <div class="container card">
                <div class="todo-item">
                  <div>${task.title}</div>
                  <input
                    type="checkbox"
                    id="task"
                    name="taskStatus"
                    ?checked="${task.completed}"
                    @change="${(e) => updateTaskStatus(task, e.target.checked)}"
                  />
                  <label for="taskStatus"
                    >${task.completed ? "Task Done" : "Task not Done"}</label
                  ><br />
                </div>
                <div>${JSON.stringify(sortobj)}</div>
              </div>
            `;
          })
        : html`<div class="card">
            <div class="circle">3</div>
            <h1>View Three</h1>
            <p>Please click the button to get a list of tasks.</p>

            <div class="field is-grouped">
              <div class="control">
                <button @click="${getFetch}" class="button is-link">
                  Submit
                </button>
              </div>
            </div>
          </div>`}
    `;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("my-view3", MyView3);
