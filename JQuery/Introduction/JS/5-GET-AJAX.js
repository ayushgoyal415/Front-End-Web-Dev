$(function () {
  $('#ajax-get').on('click', function (e) {
    // callback_ajax();
    // setting_ajax();
    // promise_ajax();
    // mix_ajax();
  });
});

//. Defining Settings for AJAX-GET
/** @type {JQueryAjaxSettings} settings */
const settings = {
  //. url is the only required setting property
  url: 'https://api.github.com/users',

  //. Optional data that you want to send (object or string)
  data: { name: 'Ayush' },

  //. The type of dataType expected to be returned (Default : intelligent)
  dataType: 'json',

  //. Whether to send async/sync request. (Default : 'true')
  async: true,

  //. Tells the server that what kind of response does the client accept
  accepts: 'json',

  //. success : the callback to be executed if request succeeds
  success(data, textStatus, jqXHR) {
    /*
  
    This callback executes only if the request succeeds
  
    . date contains the response data
  
    . textStatus for eg. "success"
  
    . jqXHR is a modified XHR object
  
    Note : since JSONP and cross-domain GET requests do not use XHR,
    in those cases the jqXHR and textStatus parameters passed to the
    success callback are undefined.
  
  */
    console.log(data);
    console.log(jqXHR.status);
    console.log(textStatus);
  },

  //. error : the callback to be executed if request fails
  error(jqXHR, textStatus) {
    /*
  
    Possible values for the textStatus (besides null) are : 
    ."timeout", "error", "abort", and "parsererror"
  
    When an HTTP error occurs, errorThrown receives the textual portion
    of the HTTP status, such as "Not Found" or "Internal Server Error."
  
    Note: This handler is not called for cross-domain script and cross-domain
    JSONP requests.
    
  */

    console.log(jqXHR.status);
    console.log(textStatus);
  },

  complete(jqXHR, textStatus) {
    /*
  
    This callback executes when the request completes (no matter if
    the request succeeded or failed)
  
    Possible values for textStatus include :
    ."success", "notmodified", "nocontent", "error", "timeout", "abort"
    .or "parsererror"
    
  */

    console.log(jqXHR.status);
    console.log(textStatus);
  },

  statusCode: {
    /*

    An object of numeric HTTP codes and functions to be called when the
    response has the corresponding code.

    If the request is successful, the status code functions take the same
    parameters as the success callback; if it results in an error (including
    3xx redirect), they take the same parameters as the error callback.

  */
    200(data, textStatus, jqXHR) {
      console.log(data);
      console.log(jqXHR.status);
      console.log(textStatus);
    },
    404(jqXHR, textStatus) {
      console.log(jqXHR.status);
      console.log(textStatus);
    }
  }
};

function callback_ajax() {
  // Arguments : url, ?data, ?success cb fxn, ?dataType
  // Returns a promise
  $.get(
    'https://api.github.com/users',
    { name: 'Ayush' },
    settings.success,
    'json'
  );
}

function setting_ajax() {
  // Arguments : A plain object containing url +/- other settings
  // Returns a promise
  $.get(settings);
}

function promise_ajax() {
  /*

    The .always() method receives the arguments that were used to .resolve()
    or .reject() the Deferred object, which are often very different. For this
    reason, it's best to use it only for actions that do not require inspecting
    the arguments.

  */

  $.get('https://api.github.com/users')
    .done(settings.success)
    .fail(settings.error)
    .always(alert('Request Completed'));
}

function mix_ajax() {
  //. Combining callback_ajax and promises
  //. Success argument is sent as null in order to send dataType

  $.get('https://api.github.com/users', { name: 'Ayush' }, null, 'json')
    .done(settings.success)
    .fail(settings.error)
    .always(alert('Request Completed'));

  //. Similarly settings_ajax can also be combined with promises
}
