let check = Boolean;
const showBoard = async () => {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			i % 2 == j % 2
				? $(".container").append(
						`<div class="square ui-widget-content black" id="${8 *
							i +
							j}" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}">

						</div>`
				  )
				: $(".container").append(
						`<div class="square white" data-x ="${i}" id="${8 * i +
							j}" data-y ="${j}"data-point = "${i},${j}">

						</div>`
				  );
		}
	}
	await showChessPieces();
};
const showChessPieces = async () => {
	// Black chess
	$("div.square:nth-child(1)").append(
		`
         <div class="chess--piece" id="black-castle-left" data-team="dragon">
        <img  src="./img/br.svg"
        </div>
         `
	);
	$("div.square:nth-child(8)").append(
		`
         <div class="chess--piece" id="black-castle-right" data-team="dragon">
        <img  src="./img/br.svg"
        </div>
         `
	);

	$("div.square:nth-child(2)").append(
		`
         <div class="chess--piece" id="black-knight-left" data-team="dragon">
        <img  src="./img/bn.svg"
        </div>
         `
	);
	$("div.square:nth-child(7)").append(
		`
         <div class="chess--piece" id="black-knight-right" data-team="dragon">
        <img  src="./img/bn.svg"
        </div>
         `
	);

	$("div.square:nth-child(3)").append(
		`
		<div class="chess--piece" id="black-bishop-left" data-team="dragon">
        <img  src="./img/bb.svg"
        </div>
         `
	);
	$("div.square:nth-child(6)").append(
		`
        <div class="chess--piece" id="black-bishop-right" data-team="dragon">
        <img  src="./img/bb.svg"
        </div>
         `
	);

	$("div.square:nth-child(4)").append(
		`
         <div class="chess--piece" id="black-queen" data-team="dragon">
        <img  src="./img/bq.svg"
        </div>
         `
	);
	$("div.square:nth-child(5)").append(
		`
         <div class="chess--piece" id="black-king" data-team="dragon">
        <img  src="./img/bk.svg"
        </div>
         `
	);
	$("div.square:nth-child(9)").append(
		`
         <div class="chess--piece" id="black-pawn-1" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(10)").append(
		`
         <div class="chess--piece" id="black-pawn-2" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(11)").append(
		`
         <div class="chess--piece" id="black-pawn-3" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(12)").append(
		`
         <div class="chess--piece" id="black-pawn-4" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(13)").append(
		`
         <div class="chess--piece" id="black-pawn-5" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(14)").append(
		`
         <div class="chess--piece" id="black-pawn-6" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(15)").append(
		`
         <div class="chess--piece" id="black-pawn-7" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(16)").append(
		`
         <div class="chess--piece" id="black-pawn-8" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	//End Black Chess

	//Start White Chess
	$("div.square:nth-child(57)").append(
		`
         <div class="chess--piece" id="white-castle-left" data-team="phoenix">
        <img  src="./img/wr.svg"
        </div>
         `
	);
	$("div.square:nth-child(64)").append(
		`
         <div class="chess--piece" id="white-castle-right" data-team="phoenix">
        <img  src="./img/wr.svg"
        </div>
         `
	);

	$("div.square:nth-child(58)").append(
		`
         <div class="chess--piece" id="white-knight-left" data-team="phoenix">
        <img  src="./img/wn.svg"
        </div>
         `
	);
	$("div.square:nth-child(63)").append(
		`
         <div class="chess--piece" id="white-knight-right" data-team="phoenix">
        <img  src="./img/wn.svg"
        </div>
         `
	);

	$("div.square:nth-child(59)").append(
		`
		<div class="chess--piece" id="white-bishop-left" data-team="phoenix">
        <img  src="./img/wb.svg"
        </div>
         `
	);
	$("div.square:nth-child(62)").append(
		`
        <div class="chess--piece" id="white-bishop-right" data-team="phoenix">
        <img  src="./img/wb.svg"
        </div>
         `
	);

	$("div.square:nth-child(60)").append(
		`
         <div class="chess--piece" id="white-queen" data-team="phoenix">
        <img  src="./img/wq.svg"
        </div>
         `
	);
	$("div.square:nth-child(61)").append(
		`
         <div class="chess--piece" id="white-king" data-team="phoenix">
        <img  src="./img/wk.svg"
        </div>
         `
	);
	$("div.square:nth-child(49)").append(
		`
         <div class="chess--piece" id="white-pawn-1" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(50)").append(
		`
         <div class="chess--piece" id="white-pawn-2" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(51)").append(
		`
         <div class="chess--piece" id="white-pawn-3" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(52)").append(
		`
         <div class="chess--piece" id="white-pawn-4" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(53)").append(
		`
         <div class="chess--piece" id="white-pawn-5" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(54)").append(
		`
         <div class="chess--piece" id="white-pawn-6" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(55)").append(
		`
         <div class="chess--piece" id="white-pawn-7" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(56)").append(
		`
         <div class="chess--piece" id="white-pawn-8" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	//End White Chess
};

$(async () => {
	await showBoard();
	function highLightCastle(currentPoint, currentName) {
		if (
			currentName == "black-castle-left" ||
			currentName == "black-castle-right" ||
			currentName == "white-castle-right" ||
			currentName == "white-castle-left"
		) {
			for (
				let i = parseInt(currentPoint / 8) * 8;
				i <= (parseInt(currentPoint / 8) + 1) * 8 - 1;
				i++
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}

			for (
				let i = currentPoint;
				i <= parseInt(currentPoint % 8) + 1 + 55;
				i = i + 8
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}
			for (
				let i = currentPoint;
				i >= parseInt(currentPoint % 8);
				i = i - 8
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}
		}
	}
	function highLightKnight(currentPoint, currentName) {
		if (
			currentName == "black-knight-right" ||
			currentName == "black-knight-left" ||
			currentName == "white-knight-right" ||
			currentName == "white-knight-left"
		) {
			const pointKnight = [];
			let i = parseInt(currentPoint / 8);
			let j = currentPoint % 8;
			for (let x = -2; x <= 2; x++)
				for (let y = -2; y <= 2; y++)
					if (
						x * x != y * y &&
						x != 0 &&
						y != 0 &&
						i + x >= 0 &&
						i + x < 8 &&
						j + y >= 0 &&
						j + y < 8
					)
						pointKnight.push(8 * (i + x) + (j + y));
			pointKnight.forEach(knight => {
				if (
					$(`#${knight}`)
						.find(".chess--piece")
						.data("team") == "dragon" ||
					$(`#${knight}`)
						.find(".chess--piece")
						.data("team") == "phoenix"
				) {
					$(`#${knight}`).css("background", "");
				} else {
					check
						? $(`#${knight}`).css(
								"background",
								"rgb(164, 164, 164)"
						  )
						: $(`#${knight}`).css(
								"background",
								"rgb(107, 107, 107)"
						  );
					check = !check;
				}
			});
		}
	}
	function hightLightBishop(currentPoint, currentName) {
		if (
			currentName == "black-bishop-left" ||
			currentName == "black-bishop-right" ||
			currentName == "white-bishop-left" ||
			currentName == "white-bishop-right"
		) {
			let t = 0;
			let x = parseInt(currentPoint / 8);
			let y = currentPoint % 8;
			t = Math.min(x, y);
			let a = (x - t) * 8 + y - t;
			t = Math.min(x, 7 - y);
			let b = (x - t) * 8 + y + t;
			t = Math.min(7 - x, y);
			let c = (x + t) * 8 + y - t;
			t = Math.min(7 - x, 7 - y);
			let d = (x + t) * 8 + y + t;
			for (let i = currentPoint - 9; i >= a; i = i - 9) {
				if (
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "dragon" ||
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "phoenix"
				) {
					$(`#${i}`).css("background", "");
					break;
				} else {
					check
						? $(`#${i}`).css("background", "rgb(164, 164, 164)")
						: $(`#${i}`).css("background", "rgb(107, 107, 107)");
					check = !check;
				}
			}
			for (let i = currentPoint + 9; i <= d; i = i + 9) {
				if (
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "dragon" ||
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "phoenix"
				) {
					$(`#${i}`).css("background", "");
					break;
				} else {
					check
						? $(`#${i}`).css("background", "rgb(164, 164, 164)")
						: $(`#${i}`).css("background", "rgb(107, 107, 107)");
					check = !check;
				}
			}
			for (let i = currentPoint - 7; i >= b; i = i - 7) {
				if (
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "dragon" ||
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "phoenix"
				) {
					$(`#${i}`).css("background", "");
					break;
				} else {
					check
						? $(`#${i}`).css("background", "rgb(164, 164, 164)")
						: $(`#${i}`).css("background", "rgb(107, 107, 107)");
					check = !check;
				}
			}
			for (let i = currentPoint + 7; i <= c; i = i + 7) {
				if (
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "dragon" ||
					$(`#${i}`)
						.find(".chess--piece")
						.data("team") == "phoenix"
				) {
					$(`#${i}`).css("background", "");
					break;
				} else {
					check
						? $(`#${i}`).css("background", "rgb(164, 164, 164)")
						: $(`#${i}`).css("background", "rgb(107, 107, 107)");
					check = !check;
				}
			}
		}
	}
	function hightLightPawn(currentPoint, currentName) {
		if (
			currentName == "black-pawn-1" ||
			currentName == "black-pawn-2" ||
			currentName == "black-pawn-3" ||
			currentName == "black-pawn-4" ||
			currentName == "black-pawn-5" ||
			currentName == "black-pawn-6" ||
			currentName == "black-pawn-7" ||
			currentName == "black-pawn-8"
		) {
			if (
				currentPoint == 8 ||
				currentPoint == 9 ||
				currentPoint == 10 ||
				currentPoint == 11 ||
				currentPoint == 12 ||
				currentPoint == 13 ||
				currentPoint == 14 ||
				currentPoint == 15
			) {
				for (
					let i = currentPoint + 8;
					i <= currentPoint + 16;
					i = i + 8
				) {
					if (
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "dragon" ||
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "phoenix"
					) {
						$(`#${i}`).css("background", "");
						break;
					} else {
						check
							? $(`#${i}`).css("background", "rgb(164, 164, 164)")
							: $(`#${i}`).css(
									"background",
									"rgb(107, 107, 107)"
							  );
						check = !check;
					}
				}
			} else {
				for (
					let i = currentPoint + 8;
					i <= currentPoint + 8;
					i = i + 8
				) {
					if (
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "dragon" ||
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "phoenix"
					) {
						$(`#${i}`).css("background", "");
						break;
					} else {
						check
							? $(`#${i}`).css("background", "rgb(164, 164, 164)")
							: $(`#${i}`).css(
									"background",
									"rgb(107, 107, 107)"
							  );
						check = !check;
					}
				}
			}
		}
		if (
			currentName == "white-pawn-1" ||
			currentName == "white-pawn-2" ||
			currentName == "white-pawn-3" ||
			currentName == "white-pawn-4" ||
			currentName == "white-pawn-5" ||
			currentName == "white-pawn-6" ||
			currentName == "white-pawn-7" ||
			currentName == "white-pawn-8"
		) {
			if (
				currentPoint == 48 ||
				currentPoint == 49 ||
				currentPoint == 50 ||
				currentPoint == 51 ||
				currentPoint == 52 ||
				currentPoint == 53 ||
				currentPoint == 54 ||
				currentPoint == 55
			) {
				for (
					let i = currentPoint - 8;
					i >= currentPoint - 16;
					i = i - 8
				) {
					if (
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "dragon" ||
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "phoenix"
					) {
						$(`#${i}`).css("background", "");
						break;
					} else {
						check
							? $(`#${i}`).css("background", "rgb(164, 164, 164)")
							: $(`#${i}`).css(
									"background",
									"rgb(107, 107, 107)"
							  );
						check = !check;
					}
				}
			} else {
				for (
					let i = currentPoint - 8;
					i >= currentPoint - 8;
					i = i - 8
				) {
					if (
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "dragon" ||
						$(`#${i}`)
							.find(".chess--piece")
							.data("team") == "phoenix"
					) {
						$(`#${i}`).css("background", "");
						break;
					} else {
						check
							? $(`#${i}`).css("background", "rgb(164, 164, 164)")
							: $(`#${i}`).css(
									"background",
									"rgb(107, 107, 107)"
							  );
						check = !check;
					}
				}
			}
		}
	}
	function hightLightKing(currentPoint, currentName) {
		if (currentName == "black-king" || currentName == "white-king") {
			let i = parseInt(currentPoint / 8);
			let j = currentPoint % 8;
			const pointKing = [];
			for (let x = i - 1; x <= i + 1; x++) {
				for (let y = j - 1; y <= j + 1; y++) {
					if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
						if (x != i || y != j) {
							pointKing.push(8 * x + y);
						}
						pointKing.forEach(point => {
							if (
								$(`#${point}`)
									.find(".chess--piece")
									.data("team") == "dragon" ||
								$(`#${point}`)
									.find(".chess--piece")
									.data("team") == "phoenix"
							) {
								$(`#${point}`).css("background", "");
								return;
							} else {
								console.log($(`#${point}`).css('background-color'));
$(`#${point}`).css('background-color')=="rgb(241, 100, 100)"
									? $(`#${point}`).css(
											"background",
											"rgb(164, 164, 164)"
									  )
									: $(`#${point}`).css(
											"background",
											"rgb(107, 107, 107)"
									  );

							}
						});
					}
				}
			}
		}
	}
	function hightLightQueen(currentPoint, currentName) {}
	$(
		"#black-castle-left, #black-castle-right,#black-knight-right,#black-knight-left,#black-bishop-left,#black-bishop-right,#black-queen,#black-king,#black-pawn-1,#black-pawn-2,#black-pawn-3,#black-pawn-4,#black-pawn-5,#black-pawn-6,#black-pawn-7,#black-pawn-8,#white-castle-left, #white-castle-right,#white-knight-right,#white-knight-left,#white-bishop-left,#white-bishop-right,#white-queen,#white-king,#white-pawn-1,#white-pawn-2,#white-pawn-3,#white-pawn-4,#white-pawn-5,#white-pawn-6,#white-pawn-7,#white-pawn-8"
	).draggable({
		addClasses: false,
		helper: "clone",
		start: function(event, ui) {
			$(this)
				.parent()
				.toggleClass("hight--light");

			let currentName = $(this).attr("id");
			let currentPoint = Number(
				$(this)
					.parent()
					.attr("id")
			);
			highLightCastle(currentPoint, currentName);
			highLightKnight(currentPoint, currentName);
			hightLightBishop(currentPoint, currentName);
			hightLightPawn(currentPoint, currentName);
			hightLightKing(currentPoint, currentName);
			hightLightQueen(currentPoint, currentName);
		},
		stop: function(event, ui) {
			let currentName = $(this).attr("id");
			let currentPoint = $(this)
				.parent()
				.find(".fill")
				.attr("id");
			$(".square").css("background", "");
		}
	});
	$(".square").droppable({
		// scope: "tasks", //thằng này để chặn di chuyển
		tolerance: "pointer", //chỉ cần mouse chỉ vào ô là move
		drop: function(event, ui) {
			$(".square").removeClass("hight--light");
			const startPoint = $(ui.draggable)
				.parent()[0]
				.dataset.point.split(",");
			const endPoint = $(this)
				.data("point")
				.split(",");
			const startPointInt =
				8 * parseInt(startPoint[0]) + parseInt(startPoint[1]);
			const endPointInt =
				8 * parseInt(endPoint[0]) + parseInt(endPoint[1]);
			const nameCurrent = $(ui.draggable).attr("id");
			const teamate = $(ui.draggable).data("team");
			if (startPoint[0] == endPoint[0] && startPoint[1] == endPoint[1]) {
				return;
			}

			if ($(this)[0].children[0]) {
				const teamPieces = $(this)[0].children[0].dataset.team;
				if (teamate === teamPieces) {
					return;
				} else {
					// $(this)[0].children[1].remove();
					$(this).html(ui.draggable);
					console.log(
						`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
					);
				}
			} else {
				$(this).html(ui.draggable);
				console.log(
					`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
				);
			}
		}
	});
});
