import React from "react";
import EnglishBase from "../languages/English";
import SpanishBase from "../languages/Spanish";

function getLanguage(code) {

    if (code === EnglishBase.code) {
        return EnglishBase
    }
    else {
        return SpanishBase
    }
}

export default getLanguage