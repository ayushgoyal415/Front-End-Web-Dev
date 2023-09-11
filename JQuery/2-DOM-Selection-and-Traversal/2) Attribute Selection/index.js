$(function () {
  $(`.attributeContainsPrefixSelector input[placeholder|="man"]`).css({
    /*
      Attribute Contains Prefix Selector :
      + SYNTAX : [name|=”value”]
      
      Selects elements that have the specified attribute with a value either equal
      to a given string or starting with that string followed by a hyphen (-).
  
    */

    opacity: 1
  });

  $(`.attributeContainsSelector input[placeholder*="man"]`).css({
    /*
      Attribute Contains Selector : 
      + SYNTAX : [name*=”value”]

      Selects elements that have the specified attribute with a value containing a given substring.
  
    */

    opacity: 1
  });

  $(`.attributeContainsWordSelector input[placeholder~="man"]`).css({
    /*
      Attribute Contains Word Selector : 
      + SYNTAX : [name~=”value”]

      This selector matches the test string against each word in the attribute value,
      where a "word" is defined as a string delimited by whitespace. The selector
      matches if the test string is exactly equal to any of the words.
  
    */

    opacity: 1
  });

  $(`.attributeEndsWithSelector input[placeholder$="man"]`).css({
    /*
      Attribute Ends With Selector : 
      + SYNTAX : [name$=”value”]

      Selects elements that have the specified attribute with a value
      ending exactly with a given string.
      
      ~ Case sensitive.
  
    */

    opacity: 1
  });

  $(`.attributeEqualsSelector input[placeholder="man"]`).css({
    /*
      Attribute Equals Selector : 
      + SYNTAX : [name=”value”]
      
      Selects elements that have the specified attribute with a value exactly equal to a certain value.

    */

    opacity: 1
  });

  $(`.attributeNotEqualsSelector input[placeholder!="man"]`).css({
    /*
      Attribute Not Equal Selector : 
      + SYNTAX : [name!=”value”]
    
      Select elements that either don’t have the specified attribute, or do
      have the specified attribute but not with a certain value.

    */

    opacity: 1
  });

  $(`.attributeStartsWithSelector input[placeholder^="man"]`).css({
    /*
      Attribute Starts With Selector :
      + SYNTAX : [name^=”value”]
      
      Selects elements that have the specified attribute with a value beginning
      exactly with a given string.
  
    */

    opacity: 1
  });

  $(`.hasAttributeSelector input[placeholder]`).css({
    /*
      Has Attribute Selector
      + SYNTAX : [name]
      
      Selects elements that have the specified attribute, with any value.
  
    */

    opacity: 1
  });

  $(`.multipleAttributeSelector input[placeholder^="man"][type="password"]`).css({
    /*
      Multiple Attribute Selector :
      + SYNTAX : [name=”value”][name2=”value2″]
      
      Selects elements that match all of the specified attribute filters.
  
    */

    opacity: 1
  });
});
