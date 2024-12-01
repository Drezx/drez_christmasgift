local rewards <const> = {
    {item = "coffee", label = "Coffe", count = 5},
    {item = "weapon_pistol", label = "Pistol", count = 1},
    {item = "weapon_switchblade", label = "Switchblade", count = 1},
    {item = "money", label = "Money", count = 10000},

} 

local claimed = json.decode(LoadResourceFile(GetCurrentResourceName(), "claimed.json"))


RegisterCommand("gift", function(source)
    local license <const> = GetPlayerIdentifierByType(source, 'license')
    if (claimed[tostring(license)]) then
        return
    end

    local reward <const> = rewards[math.random(1, #rewards)]
    claimed[tostring(license)] = reward
    TriggerClientEvent("drez_christmasbox/open", source, ("x" .. reward.count .. " " .. reward.label))
end)

RegisterNetEvent("drez_christmasbox/claim", function()
    local source <const> = source
    local license <const> = GetPlayerIdentifierByType(source, 'license')
    local reward = claimed[tostring(license)]
    if (not reward or type(reward) == "boolean") then
        return
    end

    claimed[tostring(license)] = true
    SaveResourceFile(GetCurrentResourceName(), "claimed.json", json.encode(claimed), -1)
    
    -- Your item logic goes here
    -- xPlayer.addInventoryItem(reward.item, reward.count)
    -- exports['qb-inventory']:AddItem(source, reward.item, reward.count, false, false, 'drez_christmasbox/claim')

end)
