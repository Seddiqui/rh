// changing the checkbox color when it checked

$("input[type=checkbox]").change(function () {
	$(this).css("accent-color", "#af4745");
});

//Reset the checkbox
$("#resetFilterButton").on("click", () => {
	selectedCount = 0;
	const checkbox = $("input[type=checkbox]");
	if (checkbox.is(":checked")) {
		checkbox.prop("checked", false);
	} else {
		$("#not-checked-message").text("All clear !");
		setTimeout(() => {
			$("#not-checked-message").text("");
		}, 3000);
	}
	countSpan.textContent = selectedCount;
});

$("tr[data-url]").click(function () {
	window.location.href = $(this).data("url");
});

$(".export-button").click(function (event) {
	event.preventDefault();
	event.stopPropagation();
	// Get the export URL from the button's data-url attribute
	const exportUrl = $(this).find("a").data("url");

	// Send an AJAX request to the export URL
	$.ajax({
		url: exportUrl,
		method: "POST",
		data: {
			csrfmiddlewaretoken: csrftoken,
		},
		success: (response) => {
			// Create a temporary download link and click it to trigger the file download
			const link = document.createElement("a");
			link.href = response.file_url;
			link.download = response.file_name;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},
		error: (xhr, status, error) => {
			if (xhr.status === 400) {
				console.log("Error: No records selected for export");
			} else {
				console.log(`Error: ${xhr.responseText}`);
			}
		},
	});
});
// filter the project field and download start

$("#downloadFilterForm").click(function (e) {
	e.preventDefault();
	e.stopPropagation();

	const routeUrl = $(this).find("a").data("url");
	// console.log(routeUrl)
	const exportData = {};
	const userData = [];
	const currencyData = [];
	const donorData = [];
	const clusterData = [];
	const implementingPartnerData = [];
	const programPartnerData = [];

	const checkedDonor = document.querySelectorAll(".input-check-donor");
	for (let i = 0; i < checkedDonor.length; i++) {
		if (checkedDonor[i].checked === true) {
			donorData.push(checkedDonor[i].value);
		}
	}
	const checkedCluster = document.querySelectorAll(".input-check-cluster");
	for (let i = 0; i < checkedCluster.length; i++) {
		if (checkedCluster[i].checked === true) {
			clusterData.push(checkedCluster[i].value);
		}
	}

	const checkImplement = document.querySelectorAll(".input-check-implement");
	for (let i = 0; i < checkImplement.length; i++) {
		if (checkImplement[i].checked === true) {
			implementingPartnerData.push(checkImplement[i].value);
		}
	}
	const checkProgram = document.querySelectorAll(".input-check-program");
	for (let i = 0; i < checkProgram.length; i++) {
		if (checkProgram[i].checked === true) {
			programPartnerData.push(checkProgram[i].value);
		}
	}
	const checkUser = document.querySelector(".input-user");
	if (checkUser.checked === true) {
		userData.push(checkUser.name);
	}
	const checkCurrency = document.querySelector(".input-currency");
	if (checkCurrency.checked === true) {
		currencyData.push(checkCurrency.name);
	}

	if (userData.length !== 0) {
		exportData.focal_point = userData;
	}

	const checkedItem = document.querySelectorAll(".input-check");
	for (let i = 0; i < checkedItem.length; i++) {
		if (checkedItem[i].checked === true) {
			exportData[checkedItem[i].name] = checkedItem[i].value;
		}
	}
	// ACTIVITY PLANNING
	const activityDomain = [];
	const activityType = [];
	const activityDetail = [];
	const beneficiary = [];
	const BCategory = [];
	const indicator = [];
	const activityDescription = [];
	const domainCheck = document.querySelectorAll(".domain-check");
	for (let i = 0; i < domainCheck.length; i++) {
		if (domainCheck[i].checked === true) {
			activityDomain.push(domainCheck[i].value);
		}
	}
	const typeCheck = document.querySelectorAll(".type-check");
	for (let i = 0; i < typeCheck.length; i++) {
		if (typeCheck[i].checked === true) {
			activityType.push(typeCheck[i].value);
		}
	}
	const detailCheck = document.querySelectorAll(".detail-check");
	for (let i = 0; i < detailCheck.length; i++) {
		if (detailCheck[i].checked === true) {
			activityDetail.push(detailCheck[i].value);
		}
	}
	const checkedIndicator = document.querySelectorAll(".checkedIndicator");
	for (let i = 0; i < checkedIndicator.length; i++) {
		if (checkedIndicator[i].checked === true) {
			indicator.push(checkedIndicator[i].value);
		}
	}
	const checkBeneficiary = document.querySelectorAll(".beneficiary-check");
	for (let i = 0; i < checkBeneficiary.length; i++) {
		if (checkBeneficiary[i].checked === true) {
			beneficiary.push(checkBeneficiary[i].value);
		}
	}
	const checkBCategory = document.querySelectorAll(
		".beneficiary-category-check",
	);
	for (let i = 0; i < checkBCategory.length; i++) {
		if (checkBCategory[i].checked === true) {
			BCategory.push(checkBCategory[i].value);
		}
	}
	const descriptionCheck = document.querySelectorAll(".description-check");
	for (let i = 0; i < descriptionCheck.length; i++) {
		if (descriptionCheck[i].checked === true) {
			activityDescription.push(descriptionCheck[i].value);
		}
	}
	// Target Location fields
	const province = [];
	const district = [];
	//  let locationType = [];
	const facilitySiteType = [];
	const facilityName = [];
	const facilityMonitoring = [];
	const facilityId = [];
	const facilityLat = [];
	const facilityLong = [];
	const provinceCheck = document.querySelectorAll(".province-check");
	for (let i = 0; i < provinceCheck.length; i++) {
		if (provinceCheck[i].checked === true) {
			province.push(provinceCheck[i].value);
		}
	}
	const districtCheck = document.querySelectorAll(".district-check");
	for (let i = 0; i < districtCheck.length; i++) {
		if (districtCheck[i].checked === true) {
			district.push(districtCheck[i].value);
		}
	}
	const facilitySiteTypeCheck = document.querySelectorAll(
		".facility-site-type-check",
	);
	for (let i = 0; i < facilitySiteTypeCheck.length; i++) {
		if (facilitySiteTypeCheck[i].checked === true) {
			facilitySiteType.push(facilitySiteTypeCheck[i].value);
		}
	}

	const facilityMonitoringCheck = document.querySelectorAll(
		".facility-monitoring-check",
	);
	for (let i = 0; i < facilityMonitoringCheck.length; i++) {
		if (facilityMonitoringCheck[i].checked === true) {
			facilityMonitoring.push(facilityMonitoringCheck[i].value);
		}
	}
	const facilityNameCheck = document.querySelectorAll(".facility-name-check");
	for (let i = 0; i < facilityNameCheck.length; i++) {
		if (facilityNameCheck[i].checked === true) {
			facilityName.push(facilityNameCheck[i].value);
		}
	}
	const facilityIdCheck = document.querySelectorAll(".facility-id-check");
	for (let i = 0; i < facilityIdCheck.length; i++) {
		if (facilityIdCheck[i].checked === true) {
			facilityId.push(facilityIdCheck[i].value);
		}
	}
	const facilityLatCheck = document.querySelectorAll(".facility-lat-check");
	for (let i = 0; i < facilityLatCheck.length; i++) {
		if (facilityLatCheck[i].checked === true) {
			facilityLat.push(facilityLatCheck[i].value);
		}
	}
	const facilityLongCheck = document.querySelectorAll(".facility-long-check");
	for (let i = 0; i < facilityLongCheck.length; i++) {
		if (facilityLongCheck[i].checked === true) {
			facilityLong.push(facilityLongCheck[i].value);
		}
	}

	const disaggregation = [];
	const disaggregationCheck = document.querySelectorAll(
		".disaggregation-check",
	);
	for (let i = 0; i < disaggregationCheck.length; i++) {
		if (disaggregationCheck[i].checked === true) {
			disaggregation.push(disaggregationCheck[i].value);
		}
	}
	if (currencyData.length !== 0) {
		exportData.currency = currencyData;
	}
	if (donorData.length !== 0) {
		exportData.donors = donorData;
	}
	if (clusterData.length !== 0) {
		exportData.clusters = clusterData;
	}

	if (implementingPartnerData.length !== 0) {
		exportData.implementing_partners = implementingPartnerData;
	}
	if (programPartnerData.length !== 0) {
		exportData.programme_partners = programPartnerData;
	}
	if (activityDomain.length !== 0) {
		exportData.activity_domain = activityDomain;
	}
	if (activityType.length !== 0) {
		exportData.activity_type = activityType;
	}
	if (activityDetail.length !== 0) {
		exportData.activity_detail = activityDetail;
	}

	if (indicator.length !== 0) {
		exportData.indicator = indicator;
	}
	if (beneficiary.length !== 0) {
		exportData.beneficiary = beneficiary;
	}
	if (BCategory.length !== 0) {
		exportData.beneficiary_category = BCategory;
	}
	if (activityDescription.length !== 0) {
		exportData.activity_description = activityDescription;
	}

	if (province.length !== 0) {
		exportData.admin1name = province;
		exportData.admin1pcode = "admin1pcode";
	}

	if (district.length > 0) {
		exportData.admin2name = district;
		exportData.admin2pcode = "admin2pcode";
		exportData.classification = "classification";
	}
	if (facilitySiteType.length > 0) {
		exportData.facility_site_type = facilitySiteType;
	}

	if (facilityMonitoring.length !== 0) {
		exportData.facility_monitoring = facilityMonitoring;
	}
	if (facilityId.length !== 0) {
		exportData.facility_id = facilityId;
	}
	if (facilityName.length !== 0) {
		exportData.facility_name = facilityName;
	}
	if (facilityLat.length !== 0) {
		exportData.facility_latitude = facilityLat;
	}
	if (facilityLong.length !== 0) {
		exportData.facility_longitude = facilityLong;
	}
	if (disaggregation.length !== 0) {
		exportData.disaggregation = disaggregation;
	}
	//  console.log(exportData);
	$.post({
		url: routeUrl,
		method: "POST",
		data: {
			exportData: JSON.stringify(exportData),
			csrfmiddlewaretoken: csrftoken,
		},
		success: (response) => {
			const link = document.createElement("a");
			link.href = response.file_url;
			link.download = response.file_name;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},
		error: (error) => {
			swal(`Something went wrong! ${error}`);
		},
	});
});

//filter the project field and download
function showConfirmModal(event) {
	// Prevent the default behavior of the click event
	event.preventDefault();
	event.stopPropagation();

	// Get the relevant data attributes from the clicked element
	const dataURL = event.currentTarget.dataset.url;
	let returnURL = event.currentTarget.dataset.returnUrl;
	const name = event.currentTarget.dataset.recordName;
	const popupType = event.currentTarget.dataset.type;

	// Initialize variables to be used in the SweetAlert2 modal
	let title;
	let text;
	let icon;
	let dangerMode;
	let successMessage;

	// Set the modal variables based on the type of popup requested
	if (popupType === "copy") {
		title = `Are you sure you want to duplicate ${name}?`;
		text = "";
		icon = "warning";
		dangerMode = true;
		successMessage = `Done! ${name} has been duplicated successfully!`;
	} else if (popupType === "delete") {
		title = `Are you sure you want to delete this ${name}?`;
		text = "Once deleted, you will not be able to recover this record!";
		icon = "warning";
		dangerMode = true;
		successMessage = `Done! ${name} has been deleted successfully!`;
	} else if (popupType === "archive") {
		title = `Are you sure you want to archive ${name}?`;
		text =
			"Archiving the selected record will deactivate it and make it unavailable to users. Please contact the administrator if you need to access the archived records in the future!";
		icon = "warning";
		dangerMode = true;
		successMessage = `Done! ${name} has been archived successfully!`;
	} else if (popupType === "unarchive") {
		title = `Are you sure you want to unarchive ${name}?`;
		text = "Unarchiving the selected record will be reactivate in draft state.";
		icon = "warning";
		dangerMode = true;
		successMessage = `Done! ${name} has been unarchived successfully!`;
	}

	// Display the SweetAlert2 modal with the appropriate variables
	swal({
		title: title,
		text: text,
		icon: icon,
		buttons: true,
		dangerMode: dangerMode,
	}).then((willDelete) => {
		// If the user confirms the action in the modal, send an AJAX request
		if (willDelete) {
			$.ajax({
				method: "GET",
				url: dataURL,
				success: (data) => {
					// If the AJAX request is successful, display a success message and redirect
					if (data.success) {
						swal(successMessage, {
							icon: "success",
						}).then(() => {
							if (popupType === "copy") {
								if (data.returnURL) {
									returnURL = data.returnURL;
								}
							}
							window.location.href = returnURL;
						});
					}
				},
				error: (error_data) => {
					// If the AJAX request fails, display an error message
					swal(`Something went wrong! ${error_data}`);
				},
			});
		}
	});
}

// Attach the click event listener to all elements with class "show_confirm"
$(".show_confirm").click(showConfirmModal);

$(".radio-select").on("click", function (e) {
	e.preventDefault();
	e.stopPropagation();
	const url_link = $(this).data("url");
	console.log(url_link);
	const project_list = [];
	const projectID = $(".project-checkbox");
	for (let i = 0; i < projectID.length; i++) {
		if (projectID.is(":checked")) {
			project_list.push(projectID[i].value);
		}
	}
	console.log(project_list);
	$.post({
		url: url_link,
		method: "POST",
		data: {
			projectList: JSON.stringify(project_list),
			csrfmiddlewaretoken: csrftoken,
		},
		success: (response) => {
			console.log(response);
		},
		error: (error) => {
			console.log(error);
		},
	});
});

// project activity plan export in csv file
const exportCsvFile = document.querySelector(".export-button-csv");
if (exportCsvFile) {
	exportCsvFile.addEventListener("click", function (e) {
		e.preventDefault();
		e.stopPropagation();

		const export_url = this.getAttribute("data-csvlink");
		fetch(export_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-CSRFToken": csrftoken,
			},
		})
			.then((response) => response.blob())
			.then((blob) => {
				// create a download link for downloading the csv file
				const url = window.URL.createObjectURL(new Blob([blob]));
				const a = document.createElement("a");
				a.style.display = "none";
				a.href = url;
				a.download = "export.csv";
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
			.catch((error) => {
				console.error("Error downloading CSV:", error);
			});
	});
}


// bulk export fetch request
function exportButton(event) {
	event.preventDefault();
	// getting export url
	const export_url = event.currentTarget.dataset.exportUrl;
	const downloadButton = document.querySelector(".export-open");
	const downloading_spinner = document.querySelector(".downloading");
	const icon_downloading = document.querySelector(".icon-download");

	downloadButton.setAttribute("disabled", "disabled");
	downloading_spinner.style.display = "inline-block";
	icon_downloading.style.display = "none";
	
	const selected_project_list = [];
	const selectedProject = document.querySelectorAll(".project-checkbox");
	for (let i = 0; i < selectedProject.length; i++) {
		if (selectedProject[i].checked) {
			selected_project_list.push(selectedProject[i].value);
		}
	}

	fetch(export_url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-CSRFToken": csrftoken,
		},
		body: JSON.stringify(selected_project_list),
	})
		.then(async (response) => {
			// getting filename
			const contentDisposition = response.headers.get("Content-Disposition");
			const filename = contentDisposition.split("=")[1].replace(/"/g, "");

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		})
		.catch((error) => {
			console.error("Error downloading:", error);
		}).finally(()=>{
			downloadButton.setAttribute("disabled", "false");
			downloading_spinner.style.display = "none";
			icon_downloading.style.display = "inline-block";
		});
}
