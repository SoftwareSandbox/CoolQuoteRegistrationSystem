db.conversation.insert([
{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Jorgo"}],"text":" snapt gij iets van deze mail? Tekste en elipsen en shit","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.232Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Lenne"}],"text":" Weet gij waar Veronique Coninx is?","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Ann"}],"text":" Zit die niet tegenover u?","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Lenne"}],"text":" Ah, Heeej ","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.232Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Kevin"}],"text":" Ik ga trouwen","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Ruben"}],"text":" Da's begin van het einde e","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"text":"Jannick deelt papieren uit","lineType":"CONTEXT"},{"punchLine":false,"participants":[{"victim":false,"name":"Tom"}],"text":" Hebt ge het aangepast ofwa?","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Jannick"}],"text":" Hoe? Moest ik iets aanpassen?","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Rob"}],"text":" *vragende blik* da ne nieuwe plant ginder?","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Kevin"}],"text":" Dieje? Neeee!","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Rob"}],"text":" Hmmm...","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Rob"}],"text":" Luister eens goed..","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Wim"}],"text":" .... wa moet ik horen?","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Rob"}],"text":" niks, veel lawaai ","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Rob"}],"text":" Blijf van mn banaan af e","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Ruben"}],"text":" Hatchie!!","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Ruben"}],"text":" Buh, fucking ebola","lineType":"SPEECH"},{"punchLine":false,"text":"   ","lineType":"CONTEXT"},{"punchLine":false,"text":"Kevin is aan het hikken en aan het pairen met Ruben... Jorgo komt iets vragen","lineType":"CONTEXT"},{"punchLine":false,"participants":[{"victim":false,"name":"Kevin"}],"text":" Hik.... Hik...","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Ruben"}],"text":" Ja Kevin is een beetje kapot.","lineType":"SPEECH"},{"punchLine":false,"text":"   ","lineType":"CONTEXT"},{"punchLine":false,"participants":[{"victim":false,"name":"Ruben"}],"text":" Het is in orde, buiten het feit dat het niet werkt","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Lenne"}],"text":" Nu ge hier toch zit, ga ik u heel efkes misbruiken","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Lybaert"}],"text":" (aan telefoon) Hallo met Johan... Ja ik heb een jeansbroek aan.","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"},{"lines":[{"punchLine":false,"participants":[{"victim":false,"name":"Wim"}],"text":" Ik had zo ne maat...","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Wim"}],"text":" Ah nee wie was da nu weer?...","lineType":"SPEECH"},{"punchLine":false,"participants":[{"victim":false,"name":"Wim"}],"text":" Mijn ma was da!","lineType":"SPEECH"}],"_class":"be.swsb.cqrs.conversation.Conversation","createdOn":"2017-01-27T12:03:19.233Z"}
]);
        db.conversation.updateMany(
            {},
            { $set: {"createdOn": new Date()} }
        );
        