var scriptVersion = 1.0;
var scriptAuthor = "Soulplexis";

var BlockPos = Java.type('net.minecraft.util.BlockPos');
var C07PacketPlayerDigging = Java.type('net.minecraft.network.play.client.C07PacketPlayerDigging');
var EnumFacing = Java.type('net.minecraft.util.EnumFacing');

function FastPlace2() {
    this.getName = function () {
        return "AutoBlock2";
    };

    this.getDescription = function () {
        return "Autoblocks.";
    };

    this.getCategory = function () {
        return "Combat";
    };
    this.onUpdate = function () {
		if(mc.gameSettings.keyBindUseItem.pressed) {
				mc.playerController.sendUseItem(mc.thePlayer, mc.theWorld, mc.thePlayer.getHeldItem());
    } 
	}
    this.onDisable = function() {
    }
	var target; 
	this.onAttack = function(event) {
				mc.thePlayer.sendQueue.addToSendQueue(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.RELEASE_USE_ITEM, new BlockPos(0, 0, 0), EnumFacing.UP));
				target = event.getTargetEntity();
		
	}
    
    this.onEnable = function() {
    }

    this.addValues = function(values) {
    }
}
var FastPlace2 = new FastPlace2();
var FastPlace2Client;

function onEnable() {
    FastPlace2Client = moduleManager.registerModule(FastPlace2);
};

function onDisable() {
    moduleManager.unregisterModule(FastPlace2Client);
};