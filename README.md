# Nft maker

## Instructions
Install the canvas package (pip install canvas)
Prepare collection folders:
- /{collection}/layers -> contains all the images
- /{collection}/layers/XX_YY -> contains the XXth superposing layer, representing a trait named YY
- /{collection}/layers/XX_YY/PP_NN.png -> is the image for the item named NN, occurring with probability (PP/10)%
Prepare metadata/config file:
- /{collection}/config.js -> contains the generation configuration. Parameters are commented in the file
Change 6th line of combinador.js so that it contains the name of the collection ({collection}).
Run combinador.js -> it will create the /{collection}/build folder containing the built images and metadata 0.png, 0.json, 1.png, 1.json...

## Optional
You can define restrictions for the combinations in two ways:
- /{collection}/layers/XX_YY/PP_NN_RR.png -> when randomly selected, the current build pertains to outfit RR. It will only select attributes of the same outfit or no outfit. RR can be multiple numbers at once. In this case it will select first.
- /{collection}/layers/XX_YY/PP_NN__LL.png -> when randomly selected, the current build will only add the next layers detailed in LL. For example, if /{collection}/layers/0_Background/100_Red__23.png is randomly selected, the current build will only add layers 2 and 3 after this one, so it will skip layer 1.

## Info
The program will output some info when building:
- Loads
- Added "empty" items -> if all the items of a layer don't account for total PP = 1000, a none item will be used with corresponding probability.
- Created edition ## - XX -> XX is the number of times a repeated nft had to be discarded. If it grows too quickly, creation may become stuck.
- All items names, expected frequency and real frequency -> to check if restrictions have messed up with frequencies.