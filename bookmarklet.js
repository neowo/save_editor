javascript:(function()%7Bsave()%3Bvar%20gameState%3DJSON.parse(LZString.decompressFromBase64(localStorage.getItem(%22trimpSave1%22)))%3BObject.keys(gameState.resources).forEach(function(e)%7Bvar%20a%3DgameState.resources%5Be%5D%3Ba.max%3E0%26%26(a.owned%3Da.max)%2C(%22gems%22%3D%3D%3De%7C%7C%22fragments%22%3D%3D%3De)%26%26(a.owned%3D2*a.owned)%7D)%2ClocalStorage.setItem(%22trimpSave1%22%2CLZString.compressToBase64(JSON.stringify(gameState)))%2Cload()%3B%7D)()
