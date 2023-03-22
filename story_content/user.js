function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WKuiZBVeD3":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyaN4PQd0ETUuy8NBnOw47IHiV6Zeva3clHx5KsnB45UGLH-OiTStHzyy02sSylXAIp/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

