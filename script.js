$(document).ready(function () {

  /* When the "Submit" button is clicked, run this code */
    $("#accordion_generator").click(function () {
      event.preventDefault();

      /* Gets data from the form to build the raw HTML output */
        let panel_title = $("#panel_title").val().trim();
        let image_link = $("#image_link").val().trim();
        let image_alt_text = $("#image_alt_text").val().trim();

      /* Adds function to the screenshot prefix checkbox */
        const checkbox = document.getElementById('screenshot_checkbox');

        if (checkbox.checked) {
          var screenshot_prefix = '<strong>Screenshot:</strong> '
        } else {
          var screenshot_prefix = ''
        }

      /* Adds function to icons radio buttons */
        let iconType = $('input[name="panel_icon"]:checked').val();
        var screenshot_icon = '\n'

        if (iconType === 'image') {
          var screenshot_icon = ' <i class="fas fa-image"></i></strong></a>\n'
        } else if (iconType === 'camera') {
          var screenshot_icon = ' <i class="fas fa-camera"></i></strong></a>\n'
        } else if (iconType === 'none') {
          var screenshot_icon = '\n'
        }

      /* Adds function to image width radio buttons */
        let widthType = $('input[name="panel_width"]:checked').val();
        var panel_width = '12'

        if (widthType === '12') {
          var panel_width = '12'
        } else if (widthType === '9') {
          var panel_width = '9'
        } else if (widthType === '8') {
          var panel_width = '8'
        } else if (widthType === '6') {
          var panel_width = '6'
        } else if (widthType === '4') {
          var panel_width = '4'
        } else if (widthType === '3') {
          var panel_width = '3'
        }

      /* Adds function to image border radio buttons */
        let imageBorder = $('input[name="image_options"]:checked').val();
        var image_border = ''

        if (imageBorder === 'border') {
          var image_border = 'border: 2px solid black;'
        } else if (imageBorder === '') {
          var image_border = ''
        }

      /* Sets a unique ID for the bootstrap panel based on the time when the panel was created */
        var now = new Date($.now());
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = ("0" + now.getFullYear()).slice(-4);
        var hour = now.getHours();
        var minute = ("0" + now.getMinutes()).slice(-2);
        var seconds = ("0" + now.getSeconds()).slice(-2);
        var id_suffix = year + month + day + hour + minute + seconds;

      /* Builds a single bootstrap collapsible panel based around the inputs you've entered and outputs the raw HTML to the output textarea */
        $("#output").val(
          '<div class="row">\n' + 
          '<span style="display: none;">=== BEGIN ' +
          id_suffix +
          '===</span>\n' +
          '  <div class="row">\n' +
          '    <div class="col-md-' + panel_width + '">\n' +


          '      <div>\n' +
         
          '        <div class="panel panel-default" style="border: none; box-shadow: none;">\n' +
          '          <div class="panel-heading" role="tab" id="heading-' +
          id_suffix +
          '">\n' +
          '          <h5 class="panel-title" style="content: \'\';">\n' +
          '            <a role="button" data-toggle="collapse" class="accordion-plus-toggle collapsed" href="#collapse-' +
          id_suffix +
          '" aria-expanded="false" aria-controls="collapse-' +
          id_suffix +
          '">' +
          screenshot_prefix +
          panel_title +
          screenshot_icon +
          '          </h5>\n' +
          '        </div>\n' +
          '        <div id="collapse-' +
          id_suffix +
          '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-' +
          id_suffix +
          '">\n' +
          '          <div class="panel-body">\n' +
          '    		 	   <img src="' +
          image_link +
          '" alt="' +
          image_alt_text +
          '" style="display: block; margin: auto; width: 95%; ' + image_border + ' ">\n' +
          '    		 </div>\n' +
          '        </div>\n' +
          '      </div>\n' +
          '    </div>\n' +



          '  </div>\n' +
          '<span style="display: none;">=== END ' +
          id_suffix +
          '===</span>\n' +
          '</div>\n'
        );
    });

    /* Adds function to the "Copy to clipboard" button */
      $("#copy_to_clipboard").click(function () {
        event.preventDefault();
        var copy_output = $("#output").val().trim();
        console.log(copy_output);
        navigator.clipboard.writeText(copy_output);
      });

    /* Adds function to reset button */
      $("#reset").click(function () {
        event.preventDefault();
        $("input, textarea").val("");
      });

});