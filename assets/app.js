/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// start the Stimulus application
import './bootstrap';

$('.custom-file-input').on('change', function(e){var inputfile=e.currentTarget;
$(inputfile).parent().find('.custom-file-label').html(inputfile.files[0].name);})