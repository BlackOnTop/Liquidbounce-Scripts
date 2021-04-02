/// api_version=2
var script = registerScript({
    name: "SigmaHatar Detector",
    version: "1.0",
    authors: ["chocopie"]
});

var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");

script.registerModule({
    name: "SigmaHatar Detector",
    category: "Fun", 
    description: "detects sigma HATARS",
	tag: "sigma best",
	
}, function (module) {
    module.on("packet", function(event) {
        var packet = event.getPacket()
        if (packet instanceof S02PacketChat) {
			var msg = packet.getChatComponent().getUnformattedText();
			if (msg.contains("skidma")) {
				mc.thePlayer.sendChatMessage("DID YOU JUST CALL SIGMA SKIDDED?!!??!??! WELL IT IS NOT. NOTHING IN SIGMA IS SKIDDED, THEY DIDNT STEAL MOON X FLY CODE IN FACT MOON X STOLE SIGMA FLY CODE BECAUSE IT WAS SO GOOD. YOUR JUST MAD THAT OMIKRON IS A BETTER CODER THAN YOU")
			}
            if (msg.contains("monero")) {
				mc.thePlayer.sendChatMessage("DID YOU JUST ACCUSE SIGMA OF BEING A MONERO MINER?!??!??!? IT IS NOT! YOU ARE JUST MAD, PORT 3333 WAS SOLELY FOR DEBUGGING AND OMIKRON IS THE BEST CODER EVER!!!!")
			}
		}
    });
});
