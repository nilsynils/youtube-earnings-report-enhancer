Number.prototype.round = function(p) {
  p = p || 10;
  return parseFloat( this.toFixed(p) );
};

const newestDateArray = document.querySelector('.gwt-viz-container table tbody tr:last-child td').innerText.split('/');
const newestDate = parseInt(newestDateArray[1], 10);

const newestAmount = document.querySelector('.gwt-viz-container table tbody tr:last-child td:last-child').innerText;

const mostRecentDay = newestDate;
const monthSoFar = parseFloat(document.getElementById('gwt-debug-bragbutton-label-21').innerText.slice(1,12));
function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}
const monthProjected = +(monthSoFar / mostRecentDay * daysInThisMonth()).toFixed(2);
const today = new Date().getDate();

document.body.onload = addElement();

function addElement () {
	const bar = document.querySelector('.CLV4EJC-g-i');
	const monthlyTab =
	`<div>
		<div class="CLV4EJC-Q-o">
			<div class="CLV4EJC-Q-n">Projected Month Revenue</div>
			<div class="CLV4EJC-Q-p">
				<div>$${monthProjected}</div>
			</div>
		</div>
	</div>`;
	const mt = document.createElement('div');
	mt.classList.add('CLV4EJC-Q-j');
	mt.innerHTML = monthlyTab;
	bar.appendChild(mt);

	const mostRecentDayTab =
	`<div>
		<div class="CLV4EJC-Q-o">
			<div class="CLV4EJC-Q-n">Day ${mostRecentDay} (${today - mostRecentDay} days ago)</div>
			<div class="CLV4EJC-Q-p">
				<div>${newestAmount}</div>
			</div>
		</div>
	</div>`;
	const rt = document.createElement('div');
	rt.classList.add('CLV4EJC-Q-j');
	rt.innerHTML = mostRecentDayTab;
	bar.appendChild(rt);
}

// console.log(newestAmount);
// console.log(`On day ${mostRecentDay} you earned $${newestAmount}`);
// console.log(monthSoFar);
// console.log(`Projected Monthly Income: $${monthProjected}`);
// console.log(today);
