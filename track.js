function Model (title, summary, hours, subject) {
	this.node = node;
	this.trackID = getTrackID();
	if (hours != undefined){
		this.hours = hours;
	}
	this.subject = subject;

	this.trackList = [];
}



Model.prototype.getTrackID = () => this.track.length;