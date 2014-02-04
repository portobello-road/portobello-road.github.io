var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
if($('#github')){
    $.ajax({
       url: "https://api.github.com/repos/portobello-road/barrow-client/commits",
       dataType: 'jsonp',
       success: function(json){
           var last_commit = json.data[0];
           if(!last_commit) return;

           var timestamp = new Date(last_commit.commit.committer.date),
               timestamp_serialised = [month[timestamp.getMonth()], timestamp.getDate() + ',', timestamp.getFullYear()].join(' ');

           $('#github .date').text(timestamp_serialised);
           $('#github .commit-name').html('Commit ' + last_commit.sha + ' &raquo;');
           $('#github .commit-name').attr('href', "https://github.com/portobello-road/barrow-client/commit/" + last_commit.sha);
       }
    });
}