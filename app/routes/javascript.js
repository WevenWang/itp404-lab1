import Route from '@ember/routing/route';
import $ from 'jquery'

export default Route.extend({
  model()
  {

    let url = `https://www.reddit.com/r/javascript.json`;
    let promise = $.ajax(url)
    console.log(promise);

    let results = '';

    return $.getJSON(url).then(function(items)
    {


      // console.log(items)
      results = items.data.children;
      console.log(results)
      return results;
    })


  }



});
