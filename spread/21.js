function func({width, height, color = 'black'}) {
    console.log(color, width, height);
}

func({ width: 400, height: 500 });