import $ from 'jquery';
import { toPigLatin } from "./latinizer.js";
import './styles.css';


// User interface Logic
$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();

    $("div#output").show();
    const pigLatinSentence = toPigLatin( $("input#userSentence").val() );
    $("p#sentence").text(pigLatinSentence);
  });
});
