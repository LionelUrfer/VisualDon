- Comment fonctionnent les transitions en D3 et en svelte?

  Une transition est une modification de la valeur d'un attribut sur un objet existant.
  
  Pour D3:
  
  Il faut ajouter un évènement sur un objet existant.

  circle.on('click', () =>
    circle
      .transition() // lancer la transition
      .duration(1000) // durée en millisecondes
      .attr('cx', WIDTH - RADIUS * 2) // position à la fin de la transition
  )
  
  Pour SVELT:
  
  Au lieu d'un évènement, on va appliquer une transformation.
  
  <g transform={`translate(${MARGIN / 2}, 0)`}>
    {#each DATA as d, i}
      <Baton d={d} i={i} key={key} />
    {/each}
  </g>
