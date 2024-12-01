RegisterNuiCallback("claim", function()
    TriggerServerEvent("drez_christmasbox/claim")
    SetNuiFocus(false, false)
end)


RegisterNetEvent("drez_christmasbox/open", function(reward)
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "christmasbox",
        reward = reward,
    })

end)