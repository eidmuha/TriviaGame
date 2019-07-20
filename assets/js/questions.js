var mcqs = [{
    q: "Which of the following is the capital of the Northern Territory?",
    a: "Sydney",
    b: "Canberra",
    c: "Darwin",
    d: "Perth",
    ans: function(){
        return Object.keys(mcqs[0])[3]
    }
},
{
    q: "What do we celebrate on ANZAC Day?",
    a: "The landing of the first free settlers from Europe",
    b: "The landing of the First Fleet at Sydney Cove",
    c: "The landing of the first settlers from Asia at Gallipoli",
    d: "The landing of the New Zealand and Australian Army Corps at Gallipoli",
    ans: function(){
        return Object.keys(mcqs[1])[3]

    }
},
{
    q: "Australians are free to follow any belief of their choosing:",
    a: "Unconditionally",
    b: "Only if their belief is approved by the police",
    c: "Only if they do not break the law",
    d: "Only if their belief is accepted by the Queen",
    ans: function(){
        return Object.keys(mcqs[2])[3]
    }
},
{
    q: "How was Australia organized before 1901?",
    a: "By 6 self-governing Aboriginal groups",
    b: "By 6 self-governing British colonies",
    c: "By 6 British colonies that governed each other",
    d: "None of the above",
    ans: function(){
        return Object.keys(mcqs[3])[2]
    }
}]