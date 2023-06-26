
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n  background-color: black;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\nimg {\r\n    width: 200px;\r\n    height: 200px;\r\n  }";
n(css,{});

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5gAAAOYBAMAAABC5kGOAAAAElBMVEUAAADm5ub///9CQkJ2dna8vLwRC9HvAAAZPklEQVR42uzdzXbSWhgG4LTAvESdN6HM22rniMd5Rc/938oBWn+OhbID+4+uZ89el6XI4xuSfAk0/dPqpk9LPOPYeCVgijBFmCJMmCJMEaYIU4QJU4QpwhRhihvM5z9pn/9IPOMIE6YIU4QpwoQpwhRhijBFmDBFmCJMEaa4xTQMNJwWYYowRZgwRZgiTBGmCBOmCFOEKcIUYboLTDScFmGKMGF6YWCKMEWYIkyYIkwRpghThAlTrBnTMNBwWoQpwhRhwhRhijBFmCJMmCJM8XwweyvJKoDZ9//+87GxIq/Rp6/t5sXOidn3P2698onWmjPnXWBt98VrnrCenzMOp/v3apl2PfS5MPv3Xu3Ua9zmwWxZZtNMjdneeKVzrEmfHrOde53zrLsuOWa/8DJnWqsuMWb73Yuc7QilTYxpI5vzAKVLi2kjm3VDmxTTnmze45M+JaYzP3nXMiHmzMtbppopMBUz+7tmMkzvmAXOAyW6C6y1K1ugmomG044xC6yLLglm++ilLXIaKAmm3Z8iRydJMO3+lNkF6hJg2soWWm0KTFvZctvZ2Ji2sgW3s5Ex2ysva6H92QSYzhgUPG8QGbPzopZa99ExvWWWfNOMjOkts+SbZlxM14sUPdKMjOkos+SRZty7wOz/FFyXkYfT9n8KrovImK7+KbjGcTGdZS+6ImPu3pkdffrHirlu9+3ORsXc+VsefDRI7PXhds8JvZiYeyyPvPVe3Bvnu49NYmLu+hUjAini1e6zs4kx7wmkiLuO6C+jYt7sLiaBBHFHNS+6xJgTAmnizc65SUTM2e6tLIEUccdZg9SYKwKJ4iIx5vWOsxIEEsXH7JgjAqni1QmYIbOy613jb5/amyZe7WlOrOH09Z7/LAQSxBlMmDBhwoQpwoQJEyZMmARgijBhwoQJE6ZYBvO4eebYEDJVnO2ZN6YbTsOEKcKECRMmTJgiTBEmTJgwYcIUYYowYcJ8a5jmmYbTMGGKMGHChAkTpghThAkTJkyYMEWYMGHChOkuMPNMw2kRJkyYMGHCJABThAkTJkyYMEWYIkyYMGHCrBnTPNNwGiZMESZMmDBhwhRhijBhwoQJE6YIEyZMmDDdBWaeaTgtwoQJEyZMmARgijBhwoQJE6YIU4QJEyZMmDVjmmcaTsOEKcKECRMmTJgiTBEmTJgwYcIUYcKECROmu8DMMw2nRZgwYcKECZMATBEmTJgwYcIUYYowYcKECbNmTPNMw2mYMEWYMGHChAlThCnChAkTJkyYIkyYMGHCdBeYeabhtAgTJkyYMGESgCnChAkTJkyYIkwRJkyYMGHWjGmeaTgNE6YIEyZMmDBhijBFmDBhwoQJU4QJEyZMmO4CM880nBZhwoQJEyZMAjBFmDBhwoQJU4QpwoQJEybMmjHNMw2nYcIUYcKECRMmTBGmCBMmTJgwYYowYcKECdNdYOaZhtMiTJgwYcKESQCmCBMmTJgwYYowRZgwYcKEWTOmeabhNEyYIkyYMGHChCnCFGHChAkTJkwRJkyYMGG6C8w803BahAkTJkyYMAnAFGHChAkTJkwRpggTJkyYMGvGNM80nIYJU4QJEyZMmDBFmCJMmDBhwoQpwoQJEyZMd4GZZxpOizBhwoQJEyYBmCJMmDBhwoQpwhRhwoQJE2bNmOaZhtMwYYowYcKECROmCFOECRMmTJgwRZgwYcKE6S4w80zDaREmTJgwYcIkAFOECRMmTJgwRZgiTJhvFzNkRfu9bfvr18JMEP99Wt+e/3hnXMX6X7OO337PobrCmG9unjlvAtblqb9o/dJNP/z48vH3Q3789PWb4XQJzPvTflHbdz++7HrcT1/bn38d5lk0s+8/fNn/0KO1ZwfzXJr54fb1Bx89tD3Ms2jm/Mvhh1+3s4NZfzN/NEFr9A1m7c2cL5rQ9QCz7ma+bwascQuz2ma23fdm0BqtYFbazLZbNEPXEmaVzTzGsmk+w6ywmW132xyzlj3M2pp5XC+33exgVtbMoy3X3exgVtXM/vFoy/U+bZcN883NM7ugZg565P5dc8Ia+FoZTg/FvBzyyO375qQ1gVlNM9t5c+Jawqylmf3iVMxmBbOOZrbvTrbcvFwwK2jm6RvZ7X8emDU0M8JGdruhhVm+mTE2sts92g5m8WbOm0jr+UQQzHLNbB9jYY56mIWbGa2YTXPXwSzazHYRD3PUwizazJumiVxNmMWauYiJ2bQwCzYzajGfqpkW0zxz/+V4cYu5nUsaThe60mDeRF73MEs1M94x5h8qMMs0M3oxN4NNmEWa2V7FxxzDLNPM9jY+ZrOCWaSZNwksfw1PYGZtZvzdn+3qYRZoZpfEsrmHmb+ZsYbSu184mFmbGfvsz9/Xj8DM2Mx5Isufu0AwMzZzlgpzBDN3M5NtZZtmCTNzM7tkls/bWXeB5Ztn3qTDbAynM19p8JgQcwkzbzNvE2JOYGZt5jyh5dNbIMxszZylxDxwuybMuM1MeGCyWRcwMzazTWq53c7CzNXMeVrM12+khhm3mbPEmJcwszUz6VHm86sHM1Mzkx5lblcLM1czu9SWd5qZrZk3iS0n9mbzNfMqreWohZmtman3f1buAss4zxy2/zP6uF4D/v7nhPNMVxq8eKghkp+f+tF9+HEb+obpSoOMzRxw/ufrr5/tD3+r1NML17o6L2czbwbtyfz5s4e/KmO0ct1s1mZeD7P882cPai7da5K3mYE7s9uvoPn7Z98dOlsAM28zA4eZq53fw/f9wNkCmHmbGbZbetftfhqL17fLMPM2M3DAvOdpdK+fLYCZtZlhRyabPZndT2P26iWWMLM2M+jIZNzvfRr7NrQPPczszZwF//yep3GzbyANM3szrwPfMfffdPQYdlAKM30zQwZgr9/8M9/3hgkzdzNDzhmsXn0aO6p512XBNM/8/0OFXAA9OvA05jvOFgT/Ewyn411pEHI11+TQ01gMueoZZrpmBmDeDwRZwSx0DVDohR+vPo3bFzs/MEtcAxT8lvna07h6cbYAZoFmBuwMjw8/jfmLvw2zQDMDMC8Cnsbi77MFMAs08yZ4/+fVp3H999kCmAWaGQlz/vtOBJg1NzOobIvnI9IWZrlmBgxNgp7G9dMb5hRmwWbGwpw/XScE8y00c3PeYHMnAsyCzQwYZ4bt0zw2D/0UZtFmHsYchT2r2bif5sY0z/z/QwVghj2rrj3un2A4He9Kg4DNbNp/AsyczYSpmTA1E+YJzQw4zuxhvp1mtjDfTjNXMM+kmQGYS5hvp5n3MM+kmQHzzIsO5nk0MwBzAvNMmhnw4yOYZ9LMkB9vYb6ZZv7cna0P0zxz8HWzzWXKf4LhdLwrDUJ+fAzzPJoZcuPQ81VAMGtvZtCn7d/DPItmBmFOYJ5HMxchP7+CeRbNDMK8hHkWzQz5tJFD34EJs5JmhnwO0NMuEMzamzkNwxzBPIfjzMCv6JvAPINmhn7e/gpm/c0M/SaMMcz6mxn8HcV3Hczamxn+7ZnLrjZM88y/H2oRivniS2oMpyu70iD4e01+bZ9gvoFvHPqpCbPiZg75LvgJzLqbOeBb+rafcgiz4mYO+/7wB5hv6JttH3qY9TYz/Njk/5owa2zmddMcs6WFWWMzZwMxm3Hbway0mfPmKE2YNTazH4y5/S5pmDU2c+ge0JNmD7PKZl41R6zPMKts5uwYzJ+f4F0S0zzz5UPNj8JsHrY7tYbTFV1pMORig107tTDrama7OFJzs1MLs7JmzppjNb/1MOtq5rFvmn/u1MKspJkDLuraOeGEWVMzw+4eel0TZi3NnJ2A2XyCWVUzu1Mw14coMCtqZr84WRNmLc0cPKB+ed4dZjXNnDenanYwa2nmidvZE+5EgRm9maduZ7enD2BW0sx5E0czK6Z55u6Hahenay4Np8tfabDFfNdE0YRZQTOnXQTMZgWzhmaedn72tybMGpoZ/LEjYZowSzbzpDnYy7MHMIs2M8ou0OaTDzqYxZsZZxdoc9YdZvFmhn4m4mHNHmbxZk7ncTC3d3DCLNvMSEcnmxN7HczSzYxWzfUBCszCzZz2sar56yYxmMWa2Uer5hhm8Wb2V7E073Jgmme++shdLMznKw8Mp0tcafAcI50G2p4Jglm4mdPuNpbmpIdZtpnT9ibqhhZmyWbGO3OwPj6BWbaZEc8cbL55HGbRZkbcB1pvaGGWbeb09Auif+/RwizbzJgHm8+nDmAWa2bMPdoVzMLNbKOdcH/+TlyYBZvZxzt1sIRZupnRxycwyzXz2M/T21tNmAWb2Ud72xwnxDTPDHzkLtbR5tJwusyVBn9eEz2PtBO0fe1gFm3mWjNiNWEWbWa8cwebFw9m2Wau4/tIp4FgFm/mOsYZoEw6mOWbGUuzhVlBM/v+e5ThSQezgmbG0RzBrKKZcTSXMKtoZhTNCcw6mhlDcwSzkmZ2ETSXMOtoZhfh7MEEZiXNjHEuyF1gJeeZf8VTZyhLw+lyVxq8iP+1dy4NqfNAGAZa9jRH9ybAHlH30IN7T9X//1c+8PKpmLYzySQN6ZuNvouWSZ5ObpOLZ3xzrgEzGc80nodFF4CZkGcef+nZu54FzFQ8s/Iaokw1YCbkmX6d2hIwk/LM479X7p1aBZhJeebpcJmNT6MJmAl55mmZ186j0QTMlDzTY1dRCZipeeZJOnZqUc0m55kn+ce10QTM5DzTuA1RpoCZome6bfmzHz4CmEN7plMUpRCHiXimzO+67CtSCE4nsNLAuhOFT7MGzDQ902UyaAaYiXpmxW83p4CZrGeyaZaAma5nskcogJmwZxrD24+rADNhz2TO7NWAmbJn8o6Y2QJm0p7JOpltBphpeyanEzQHzMQ9k3FydAmYaXumrgy5oi0AM3HP5JwXBJipeybj9gwlCxPxzABmkPtANYLTCa40MG7nmW4BM3nPJLsmYF6AZ1K3+80AM33PpJ4CPgXMC/BMQ5wCAswL8ExiFwgwu+U6Dc+k1bMlYF6CZ9LuDysA8xI8kzhBC5iX4JnERhMwI3vmp+JZtQRMf7mS9ky1ql2sok0CqRHC1MIwWXdOb2ZONpNgNqODqe/1cJ5pdrYBRL9Um/gwLyCeeSxORX+W1FYx4pmnRSCNSxZI07P1yILTpyMDtvRnb2RXGrw5+tYlC0+A+Uu+rY+aC8Mke+b7wsmPhVe8LNwA5q8lGFdfXXjSswtRz9x9X94BmJ6Loz42VtXUZ2nrb6ie+blqcuuQhSVgnsnP9eFTWZg0z/xaZjd3yO8KMH/Kry4hGeZODua37ZYqEMzteGB+O/uqpsLciMH8PrjYAqavXP4M45JgTqRgqufzDPOysAbM73J9NotJeZY2JVoThkSrX8uVAdNd/twcN6M9u5KCeXY+wRYwveTuPEuUZ5dCMM9n47ovigbMHvn0ayk/paFbyMBUv44dbTA0cZd/fq9ko8CkBfibnldZNnLdasB0lSs+AfrIpPdVlgN9yguAmWY8U607Fpl2PUtbFDdpus2whq8aZo5o03kjCE7bj7pq+p8l7nNV3Yt+nu1bCXg5WgCm6dh3M+9/9oYGs2fRT8saV17lQoI5gmUjT+Ssn8udAMy2E/BqHswnwDSm45Sree+zNJaF7l7007KXQLNg7gCzu91rep5d+cNU7RdbNPILunJfarnu3WjT/ixx+3nZDrPrqJC55uQIi6BNz3Fl2+5Xbbxhdh4Zqxg5WgFmbxem6XqWuF/56GJtZnT//K2m54jUr858F1hfRVl6fAhfQ8bWhq77JqhCCW8cyhtmv2/N219FPhlr6lo3vgW1aTki1fg5b7YlHVS2b30V1TEn27Z9EJteTxLdjJbzNnji1SC1cfXqPpj9X8PJNUk5uhk7TOq5ux++eebVjHNea+Zkxc9Wk5QjWi0xyxYmvZrcG+3o1Z+jf+dJ+mOHlpIjYvRGGGZC8UzGWfUPv17FulKEsuinfc5GbsHD56qR/ILTrFskin8/X8W7wJKy6Ke9mSPkiNpg1JnC5N5AWTzqz2C1ednwHiUt+vFZpknti6lMYW4m7HR3ODweDoc77nNzixnX9E9B9eaInBmdKcxJvDS1mMG588D0bUOktv7ZntH+FA+mbT21YtQMtz17b8mdsWxvT1jGg7m1weR8TE1n9ulDrGzvNVnHg1nbzOB0poumYx8R416TWa4wXXpAjsm6B0lPuDRbtiEyvopttjAX0WDaey07Lk17jtbs6jpHmNEazdIOk/kx7Y01R6ypD5UtTB0LZsu+3RXzNQ+2HL3wJi+yhWl2kWDOWqZtuI32aUrx56uuN8wqIl+YN5Fgbltg8ke65f59g8v7O664X0POt8HHGpw0LWY4Ndp3h9dTeuFPKp6+KmGYCcUz2fWcY2o1YxI5WcOqmQSnuf1Jx1S0Lsp6igyzyhgmuz/p2JlthbmMy7LUOcOMU89Ofdd6iBmSN8wo9VztuwpLrFeddTUbp57tWJUet55t8oYZo54tOvaLRK1nC505zAj92blmb78PZ0jOMKsI8wbTLjOWcZvMvGGq8K5Rd5mh4zaZmcMM7xra/1SJoHMXGcEM7hpl91b2VdQmM3OYwafUpt0wY80Ptw93c4K5itJktsNcxIKpRgAz9OhA9ZgRKw5X6gAwE4pnvq9fDdsFmveaEakLtG0zI68jSsM2mbKb0TxqiFHADDs6aPrNiNIFKs04PDNkq1XofjOW8WrZ/GGGdM0pAaaJV8vmDzPkwL2mmLGIVsuOAGa4CdqCdM56hNFJPRqY4VxzSjs0P/zoxIwHZrCJg9rh2qrYTXd2V2GsgtWyNDNCu2ZTjQhmoFZzSoUZeOKg84qU/GCuAjkE9d7OsBPEnbV9hjcOhSjNuSabsQ7smOOCGaI0GbfTBp1T3I4NZoA+yPslM0QzArrmmx1hYCYXzwwWV9yyzLgJO2HQbkZ+10eFmKFlmhEqeNJXdDnCrKRLc8o0YxnSMccGU3p4orhmPAV0zLHBFJ45mLLNCNMHakYKcx2gEEXulwv6TeUJs1KCpUm5FTfGdk01VpiC80CFcjFDvqLdm9HCJB91Tph0cTLjWbz3M17PFOvR2o+C6JfSFa2qxgxTaHxQO8Ks1htJliQzMoYp4hste5QJUl0JsnwgmZEzTAHfeLvuwNEMwWazVNXYYQpE/RvtM6soNRFUEM3IGqb32J1zHa1F6p1YgxkcZqrxzC/pWdPNfc2QoVlTfzfH4LTUysvC3wyJ0e7eAObH3MHOo6USMMO/E/agAfP/xmLn3vkRMMOb5t5UgPklHWnutYgZar3zZAmY3+XOkaXQ5nyfXtDeVID5Uz67tJdy+7n1s3urXQHmubxil6KokcZtZu9e6QowLZuzWN2QkluKvSMkl4bz8fNdgHk+RNhxGiot36l+YaIsG/4PjQWm0S8BS5EiWc5Z7F1+aCwwj+OM6x3NLYOZQb8h6kEZwOzuVZqrXpyPKqgZryScj8rxh0YE8/i/fvnbVbcdwtf2r3/7KtjH/xeeAGa3PNZ1f1u84/6feynSpTHVy13H53Q0wv2HctwF1imPpr/+4nn3+C+mGfr18PuLKu5fG8835x2ctstTcV6/Hg6Hu/v7w+Hx9Z8xsc04dYdOFhzu7/6e/nyzATA9CvVt/nQAM36YYLTEm0cOMy8JmIAJmIAJmIAJCZiACZiACZiACQKACQmYgAmYo4B5gfHMvOXIgtOACZiACZiACQmYkIAJmIAJmIAJmJCACZiAecnyJjrMAjBDyUV0mBPADLVncdESogoIU4FAIJhPHjApcTbL5TsNgpCB5KalgyIVnLbAnIFAGKntB1nLwVy1HPwJAvJyGRqm7X4PBQJBpOXEhlkVGuYUBEJIW1HLwqwmdtcEAXFpO0plKwpTWc9NAgFpqezn0deyMK1H75Q/tvAj+afKfnJmIwuz+zqI4iNB+kp7MrJt5mKCNFgqhGEuUaTDpbkwzDWKdLg0FYapUaTDpa0wTLVBmQ6WGmmYTyjTwRJ9yEqKZxp9gzIdKpX0q1mIMFco1MH6P+IwFQp1sP5PJQ5zh1IdKCl5mGg0h2sypWFi2mDAJlMcJkaaA6W6CgBzgXIdIr2tNpeGiXp2uFpWHibq2UFSUwWB+QclO0xfNgBM1LNDpNtAMDHZPsyMQRCYFeZnh+n+BIGJKb1huj8MmIzlnXDNyGnOXILLgWnQakZ2zJAw0aGN22KakDDhmlFn8pQKClNjGihe2uuwMBX6QBF7P1VYmJg5iFjJVqFhVhqDzTip1uFhqjWazTgNZhUeJmhGSbemigETNGP4paniwKwU2s3AfZ/GVLFgVpW5QomHSw/OxyNM3J7TL6hrw6T7xsSGeUzXL4c7JNF0f3j1OriEEc88kzgcJMiBIz4nYrrDhExOAiZgQgImJGBCAiZgQgImJGBCAiYkYAImJGBCAiakD0zneCZkchIwARMSMCEBExIwARMSMCEBExIwIQETMCEBExIwIQET8g0mgoEITkMCJiRgQgImYEICJiRgQgImJGACJiRgQgImJGBCAiZ2gUEiOA0JmJCACZgoGMCEBExIwIQETMCEBExIwIQETEjABEzIlGEiGIjgNCRgQgImJGACJiRgQgImJGBCAiZgQgImJGBCAiYkYGIXGCSC05CACQmYgImCuWj5H8j1SQglS5pWAAAAAElFTkSuQmCC";

var img = document.createElement("img");
img.src = img$1;
img.classList.add("img-logo");
var h1 = document.createElement("h1");
h1.textContent = "I Love JavaScript!";
document.body.append(h1);
document.body.append(img);