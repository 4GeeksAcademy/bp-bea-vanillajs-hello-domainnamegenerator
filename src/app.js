/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "our"];
const adjs = ["great", "big", "awesome"];
const nouns = ["jogger", "racoon"];
const dotComs = ["com", "net", "org"];

const domainNameGeneratorFors = (pronouns, adjs, nouns, dotComs) => {
  let generatedDomains = [];
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < dotComs.length; l++) {
          generatedDomains.push(
            `${pronouns[i]}${adjs[j]}${nouns[k]}.${dotComs[l]}`
          );
        }
      }
    }
  }

  return generatedDomains;
};

window.onload = function() {
  window.printDomains = function() {
    const domains = domainNameGeneratorFors(pronouns, adjs, nouns, dotComs);
    const domainElement = document.getElementById("domainList");
    domainElement.innerHTML = "";
    domains.forEach(domain => {
      domainElement.innerHTML += `<p>${domain}</p>`;
    });
  };
};
