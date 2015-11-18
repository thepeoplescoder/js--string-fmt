// A polyfill for a String.Format equivalent that I found on StackOverflow.
// I made a few modifications, but nevertheless, it does the same thing.
if (!String.prototype.fmt)
{
	String.prototype.fmt = (function ()
	{
		var regex = /\{(\-?\d+)\}/g;
		var negatives = [0, '{', '}'];

		return function fmt()
		{
			var args = arguments;
			return this.replace(regex, function(match, $$1)
			{
				var chosen = (+$$1 >= 0) ? args : negatives;
				$$1 = Math.abs($$1);
				return typeof chosen[$$1] != "undefined" ? chosen[$$1] : match;
			});
		};
	})();
}
