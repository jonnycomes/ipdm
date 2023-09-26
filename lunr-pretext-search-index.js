var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "sec-set-notation",
  "level": "1",
  "url": "sec-set-notation.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets: Conventions and Notation",
  "body": " Sets: Conventions and Notation  We take a set to be a primitive notion. In other words, we will not attempt to give a formal definition of a set It turns out that formally defining a set is really difficult! . We will simply say that a set is a collection of elements . Given a set , we write to mean that is an element of . We write to means that is not an element of .  Some sets of numbers are denoted with special notation. For example, we write for the set of all real numbers For a formal definition of a real number, take a course on Real Analysis! . We write for the set of all natural numbers . In other words, in this class we define Thus and , but , and  Note that we are choosing not to include 0 as a natural number. This choice is not agreed upon by all mathematicians. .  An integer is a number that is either a natural number, the negative of a natural number, or zero. We denote the set of all integers by . In other words, Hence, , , , , but .  A rational number is a real number that can be written in the form with and . We write for the set of all rational numbers. For example, and . We also have and since and . It turns out that there are irrational numbers too: , , and . However, proving a number is irrational requires proof (see Example ???).  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
