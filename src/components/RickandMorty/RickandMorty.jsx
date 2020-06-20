import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "../CustomButtons/Button.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const RickandMortyAPI = () => {
  const classes = useStyles();

  // Function that fetches our characters based on the name form the input field
  function fetchCharacters() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => formatCharacters(data.results));
  }
  // Function that formats the data that was returned from our character (and appends it to the DOM)
  function formatCharacters(characters) {
    const characterDiv = document.getElementById("characters");

    characters.map(character => {
      characterDiv.innerHTML += `
      <button type="button" class="btn" data-toggle="modal" data-target="#character-${character.id}">
        <div class="card m-2" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text text-muted">(click me)</p>
          </div>
        </div>
      </button>

        <div class="modal fade" id="character-${character.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${character.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="card mb-3" style="max-width: 100%">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="${character.image}" class="card-img" alt="${character.name}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-left">
                        <h5 class="card-title"><b>${character.name}</b></h5>
                        <p class="card-text">Status: <span class="font-italic">${character.status}</span></p>
                        <p class="card-text">Gender: <span class="font-italic">${character.gender}</p>
                        <p class="card-text">Species: <span class="font-italic">${character.species}</p>
                        <p class="card-text">Location: <br /><span class="font-italic">${character.location.name}</p>
                        <p class="card-text"><small class="text-muted">Created on ${character.created}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // console.log(characters);
  }

  return (
    <Paper
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
        padding: "25px",
        flexDirection: "column"
      }}
    >
      <h1> Rick and Morty Characters: </h1>
      <div id="characters" className="text-center d-flex justify-content-center flex-wrap">
        {fetchCharacters()}
      </div>
    </Paper>
  );
};

export default RickandMortyAPI;
