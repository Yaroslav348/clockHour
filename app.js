		let canvas= document.getElementById("sandbox");
		console.log(canvas);
		let context= canvas.getContext("2d");
		function drawLine(angle,a,b,style,width){
			let R=300/2;  /*150*/
			let pX=Math.cos(angle)*R;
			let pY=-Math.sin(angle)*R;
			let qX=a*pX;
			let qY=a*pY;
			pX*=b;
			pY*=b;
			pX+=R;
			pY+=R;
			qX+=R;
			qY+=R;
			let Line=new Path2D();
			Line.moveTo(pX,pY);
			Line.lineTo(qX,qY);
			context.strokeStyle=style;
			context.lineWidth=width;
			context.stroke(Line);
		}
		function drawWatch(){
			let R=300/2;
			context.clearRect(0,0,2*R,2*R);
			context.strokeStyler="black";
			context.lineWidth=1;
			let circle=new Path2D();
			circle.arc(R,R,R,0,2*Math.PI);
			context.stroke(circle);
			for(let i=0;i<60;i++){
			let angle=(i/60)*(2*Math.PI)
			drawLine(angle,0.9,1,i%5==0 ? "black" :"red",1);
			}
			let date=new Date();
			let hours= date.getHours();
			let minuts= date.getMinutes();
			let seconds= date.getSeconds();
			let secondsAngle=(seconds/60)*(2*Math.PI);
			let minutsAngle=(minuts/60)*(2*Math.PI);
			let hoursAngle=((hours%12)/12)*(2*Math.PI);
			secondsAngle=Math.PI/2-secondsAngle;
			minutsAngle=Math.PI/2-minutsAngle;
			hourssAngle=Math.PI/2-hoursAngle;
			drawLine(secondsAngle,0,0.95,"red",2);
			drawLine(minutsAngle,0,0.75,"black",5);
			drawLine(hourssAngle,0,0.5,"black",10);
			setTimeout(drawWatch,1000);
	}
		
	drawWatch();