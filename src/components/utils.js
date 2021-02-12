export const gtag_report_conversion = (url) => {
    console.log(url);
    let callback = () => {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-473885135/eai6CK2xp-oBEM_T--EB',
        'event_callback': callback
    });
    return false;
}