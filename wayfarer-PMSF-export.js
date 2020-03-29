// ==UserScript==
// @name         Wayfarer SQL Export for PMSF manualdb
// @version      0.1
// @description  Export nomination data from Wayfarer via SQL INSERT/UPDATE
// @namespace	 https://github.com/SenorKarlos/
// @downloadURL	 https://github.com/SenorKarlos/blob/master/wayfarer-PMSF-export.js
// @homepageURL	 https://github.com/SenorKarlos/
// @match        https://wayfarer.nianticlabs.com/*
// ==/UserScript==

/* globals unsafeWindow */

function init() {
	const w = typeof unsafeWindow === 'undefined' ? window : unsafeWindow;

	let tzAdjust = 0;
    let nominationController;
	let candidates = [];
	let nominations;

	initScript();

	function initScript() {
		const el = w.document.querySelector('.nominations-controller');
		if (!el) {
			return;
		}

		nominationController = w.angular.element(el).scope().nomCtrl;
		if (nominationController !== null) {
			addExportButton();

			analyzeCandidates();
		}
		return;
	}

	function analyzeCandidates() {
		if (!nominationController.loaded) {
			setTimeout(analyzeCandidates, 200);
			return;
		}
		nominations = nominationController.nomList;
		nominations.forEach(function(item) {
			if (item.status == 'NOMINATED' || item.status == 'VOTING' || item.status == 'REJECTED') {
                let timestamp = (Date.parse(item.day)/1000)+ tzAdjust;
                if(item.status == 'REJECTED'){
                    item.status = 3;
                }else if(item.status == 'NOMINATED'){
                    item.status = 2;
                }else if(item.status == 'VOTING'){
                    item.status = 2;
                };
                let candidate = {
					'id': item.id,
                    'title': item.title,
					'description': item.description,
					'imageurl': item.imageUrl,
					'lat': item.lat,
					'lng': item.lng,
                    'status': item.status,
					'timestamp': timestamp,
					'nickname': 'username#1234'
				};
				candidates.push(candidate);
			}
		});
	}

	function newDialog() {
		let textareaContent = generateOutput();
		let newDiaContent = '<div class="modal-dialog" role="document" style="width: 420px;">'
        + '<div class="modal-content">'
        +  '<div class="modal-header">'
        +    '<h3 class="modal-title">Output Candidates</h3>'
        +    '<button id="closeDiaX" type="button" class="close" data-dismiss="modal" aria-label="Close">'
        +      '<span aria-hidden="true">&times;</span>'
        +    '</button>'
        +  '</div>'
        +  '<div class="modal-body">'
        +    '<div class="input-group mb-3">'
        +      '<textarea id="outputCandidates" style="height: 300px; width: 400px;" class="form-control" aria-label="Candidates output">' + textareaContent + '</textarea>'
        +    '</div>'
        +    '</div>'
        +  '</div>'
        +  '<div class="modal-footer">'
        +    '<button id="copyOutput" class="button-secondary" type="button" style="margin-right: 15px;" float-left>Copy output</button>'
        +    '<button id="closeDia" class="button-primary" type="button">Close</button>'
        +  '</div>'
        +'</div>';
		let newDia = document.createElement('dialog');
		newDia.id = 'outputDialog';
  		newDia.innerHTML = newDiaContent;
  		newDia.setAttribute('style', 'border: 0px; background-color: transparent;')
  		let existingDiv = document.querySelector('.container');
  		let create = existingDiv.appendChild(newDia);
  		document.getElementById("outputDialog").showModal();
  		document.getElementById("outputCandidates").focus();
  		document.getElementById("closeDia").addEventListener("click", () => {
          document.getElementById("outputDialog").close();
        });
        document.getElementById("closeDiaX").addEventListener("click", () => {
          document.getElementById("outputDialog").close();
        });
        document.getElementById("copyOutput").addEventListener("click", () => {
          document.getElementById("outputCandidates").select();
          document.execCommand('copy');
        });
	}

	function generateOutput() {
		let outputSQL = '';
		let outputSQLA = 'INSERT INTO poi (poi_id, name, description, poiimageurl, lat, lon, status, updated, submitted_by) VALUES (';
		let outputSQLB = ') ON DUPLICATE KEY UPDATE ';
		candidates.forEach(function(item) {
			outputSQL += outputSQLA + '"' + item.id + '","' + item.title + '","' + item.description + '","' + item.imageurl + '",' + item.lat + ',' + item.lng + ',' + item.status + ',' + item.timestamp + ',"' + item.nickname + '"' + outputSQLB + 'name="' + item.title + '", description="' + item.description + '", status=' + item.status + ', edited_by="' + item.nickname + '";\n';
		})
		return outputSQL;
	}

	function addExportButton() {
		const link = document.createElement('a');
		link.className = 'sidebar-item sidebar-wayfarerexporter';
		link.title = 'Export candidates';
		link.style.paddingLeft = '27px';
		link.innerHTML = '<span class="glyphicon glyphicon-share" style="margin-right: 15px;"></span> Export';
		const ref = document.querySelector('.sidebar-nominations');

		ref.parentNode.appendChild(link);

		link.addEventListener('click', function(e) {
			e.preventDefault();
			newDialog();
		});
	}

}

init();