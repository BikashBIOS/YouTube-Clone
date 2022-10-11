import React from 'react';
import './Search.css';
import Channel from './Channel';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';


function Search() {
    return (
        <div className="searchpage">  //searchpage tag for the id
            <div className="searchpage_filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>

            <Channel
                image="https://yt3.ggpht.com/a/AATXAJyR7L2HcfcpbjY7w10nsTZfsfCEpuIcMpEPz3c83w=s176-c-k-c0x00ffffff-no-rj"
                channel="Bikash Ranjan Ojha"
                verified
                subs="100K"
                noOfVideos={20}
                description="Registration Number - 18012276685"
            /> //channel tag for displaying the 
            <Channel
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUWGBcYGBgXGBYXGBgXGhUXFxcXFhcYHSggGBolGxoXITEhJSkrLi8uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICAtLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD0QAAIBAwMCBAQDBwMEAQUAAAECEQADIQQSMQVBEyJRYQYycYGRocEHFCNCUrHwctHhM2KS8VMVgqKjwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAwEBAAICAwAAAAAAAAABAhEDEiExQRNRIjIEYZH/2gAMAwEAAhEDEQA/AKNfvStLEYsYproUBEGibOhUZqbRohbpdExanlrphUSKm0Fsbqcp9KVgKNFqGVtrVZtKRE0tu6MMQQKdabSeSD6VSEd2boOBmous2JWB6j8zA7+poDUK1p4Xd27cyYAB+9SdRvG4hVeQVPO2M+pHoDinYjvp+m224EhifLPcjn+x+2aYae1tQb8GCSOZntH3/KhV1h3qQrNAWAik7mYMJHoo7k8T2irRbUBN3oJMRn1+oq0SJ7+gAZXAMgrjtAPeciRjim19FI2nn0FDpr7bDcdq/wCsQeNwme0Zme9dhC+Nu8chwVDbpGI9v0ijnwRXH6CQu1DgNDFsEByVMesDbWtf8Oou3bI2nvlnEDdP9OM/c8VZDo33LOQSu4YgwcY7GQDyeTRPULUocc478EweMjE0aoDy/R7kuqHIAHmCxmMgSfdSp78+1Ha5GBVkEhsj3zwAPSRW9b8O3FZb6MrrAB/lZiSNog4EA8mOeKddQ3DTr4Khiw2rw3mOFOeV5E/Q5rPVv0ZUdQHGdpg947zjn8K4vWI/2ppeDuWuGdiEAYxgEER67h2P96W3r5JUkRyO8Ag96ymqKQOTFdXHxW+pjaBHoP8APxofQXC5iKhoZJZumiZmpBo/apBpTTjCguwS4kVwSTRQsGc1K1iBWgC7ZWUZtrKYFY0tzNNLdzFLFswa68aDFYu0MsnTop1aIxNVnp94xT7QNviqhIXg2thVycUytmRiq9qkuIBOfYc7e+ByKM6MzOVXxJktIIEgDgERMwRJrdMVjS3dtsm4wxUyYzBH9v8Amp7fTw+QJ3nzREBZYSOxyAc9qCS0YKbRs/qXBIkjntgfnUui1RszB8q7E2nOW2qpUckeZRgUbdJsY2NGlpoE5JlgqqPlHMCM+3rU+leS9sYOGTDLK7QO+DDA49IokiQviHbHmP8ASYyJPbia616I0R8wESP6SRuEj/SCPdRWghE3QHLoytuG9y0QAMQIB94x7H2ou3d8FRaCwQxJmZaSST95om7q9nA8pnbg8ECD79qrw15uakq24kKNpkcEsSCJnn+9YzyRgHow6rrSssG3AGMevpzW7OsZ0O2Q+0ssegJyffH50OlkD5ixk9/qSNo7CSfxo1NqztxyDxMehjvUxk27sQp0vSmvqEYFk3AurEqQsMi5537Stz3P4VY7tgIASOBGB2GZiu9DqEEzy0GfYLA+mAB9xXPV9aEsswBYxAGOSDW0arg0VzW2FZVS1B3MzRJyzEsJPYDLH6fSl/V+iBLQHLKBJOC2c4Hf19asPQekiwGdnDM8ekAgebYBwJ/ICo+s6hFTxGI2SB5gTDFoHvBmlVroymdT0imAMyFgd+Tun2zE+po7pvR0WR7Dnn68VXOna9mvAGSqnBAnv+YFXvQ2QRPHf37nJ789qyjTZVUCXtIJqP8AdQKPu3ApiRUY81XwaFNzT0HqPSnuotYpHejdUyGDbK3Re2tVHRFE0+p3NXdyydwpvpPh8I8nip+qIuAOap0kPwP6R08G2D7D86Y3kFqCuFxMZgE8n71voZREXcf8+lA6zVIWcI4V5+UTETywBgjB/D3opUQx7otaLoZHlXGCRH2mOJpf+7Fb4Cllkbpx9JDT6UM2gT93N1LiG4F80SWVtxPzevaCB2zjPXTdd4rJjJQnAMzjHv8ATnJrLJJukx0NLWouIw8RV2MwCkN5h/qHccZB7/g31pRFslzl3WOSPK3iS0cBQm6faoxfKpZ2sCrBiRMlSAAvGO5x78VBY6hDbnAkOQB3iCrMMCJnBHq30qlUPpHpYE1A8KGG7eHif6CDMfnTHThbCKQPKVUf92BwSckD3pVo9SFKlG3KMQYwvZfaJii9Xqt0YyPTmOT/AL/at1JMDV3UKzOCsDBtkwQwEbvsGI/8vYwivaUhi4CbmhiuSARu8pz+UUT1C8gZbgGbh2wIGQNoAGcCAT65Ndai4qq8Y2gHHaARUZOiBemW7pB8pYqonzSZBMxPfbGM5HOags3WKvhgTc8MbvVT5x+RFdLqjBNt9gunaxiQpkByBxO0H1rrU69Suy0gBUnw1IiN8eIQeIEExNRGKlFIdHfTnliWwIBI+0nzckfWpuoW729YEW/SGlvQR/UeY9/WYD0equA+GBuYHsAcHdtLSRPfHecU/u2vGV7bM3mRgCsBhvXJzwec1eNfxolgC6lS5DblAQ8wATtljP2496q/xxrhfsjwptqDbuqYM3XuZRUEgg+YknMR7irqnS0lS2TuJg58ptwJH1C1R+paQLcuOxPh2XZlVFJZVLljL4LNAkgt5ZI421TtIuKJPhfp2nFpRtO8ncdxMllLYYCPbEZj2o27bdckg85U4bjgDjn07Ul6d1OyDuAJAM+byCCQAfLJEA/5NPf3ranifKS2JUwU53cSe34xist00NrolN667AsNowMxJzzA9qcaZiAKWtqDuO4ZB9s/SMc010txSBkf+vWs8Uk5DZPcWRSu707M0za6JqC/ezXTxjBhpKypd5rVFICkv1Ut7fWll7V+Y5k/8SaJ6noWQbhxQ+l6a1zOZ5x7g9+K527Ghja1Y8Od0HiPX6+netdCUXBnbltrEkku26RjtHqOaZ6XpI2MtuC4kw6BgcjBEfLx6c5qJOmbbCyhVhcAucrElt0TIBAJII/qEjvScbiFo11W0y3CtsABTLcyZ8zEbYxz9/rWaS8fEXYWCiAoWVkEfKSwMNMHj0ijNT1TTt4dtDnKs7TJlOCxJBO4EyuDSe14lyA1t1KoQrQQxUsVleASMfQmMiaNP10Sst3QAWUl7gd/5SwAbkkbiI3djIjvUOjuXbWxLrh2G4OQrBGBAiAR2zBkczVfXWmzaOy2bl3aFQZBHnKkHHMQ3AHPEVrX6+5tAGXAAj/u9v8AO1aYccpuvgpLo51vXgtwpbOVz2gdgT70N1H4hdNrtdYFeVkAN7MIJAz7UD0fQi0jbzvuN5uO/t659a1e01r5nLl+SAdsfQiD+feu+OHGvhNHI+J71yHC4BlJKATwSpb/ADFNR1t9p8TaocQ2ZBHswOD9qqmq1Fi9jaWIwATDD2g4P60ubSMJNm6xI5RsGPYcHP4/arcYP4Oj0Sz1qywA3wR/MOe+SQROYmew+tF6J5Nsk8bpM8CJ2rAkEwwn1ZTgivNr19SGUQLggrH5j3GSfvUvTPiE4JJWDtuD0keV19IODWU8MG+B4e+9E0Ki0oiWJV2MjLwp9fSBHYVymoXxWKGYx9IxE9zJ/L2rzb4c+MT4osXXKNuXaRO1gT8wjj/irXpNdbF25cYzkKnAVgoJOexknA5+2cZ8Jotep1iqpfHKgGJ3FiFVR6ksY+9JOm9KuWBsa54rNca4Z8oAZi+BmADKgc0NpL92/qFZios2mlYPz3CMHjhFZhjux7gVZbuqCqe2ee5Mxx6zTXegVpuh6ZbouLb8Nl3SuNrbmJnIyefSJ+lZ1C2rKUIggEc4z2IFDfEXVGUSjSm6YlQdoUSfxPGP71F0nVLcYl942iGUj5iefPmY+3FZSmnLWg+WJr2nW0uwbiUUR78kziuunqQZ7f70f1HqVsNEDzN8oxwGgluPKAB65ru2FZlRQFLeg4B4OI5x+PpWP4ovwezOpmunTE0Rd6aEElj9gPwodzAyZrojGlTAi31lDm6Kyoodgg0isu1oP1oROhbXJGVMDbwIHpmirslZU/WueidQJPh3ZkyUc/KR/ST6+xrm94HSW9c2qjg2xtcBtxGxkJym8SEJGAfWBXV971+wjpZS3fJRmLEBrqg4VwqyvlmJxntmpwAt9IAg7hcWMjcPK5H8w3KBPuPSjLyjmdrMyxtiZB3TH2qllcVqwKwlhVuw1xbU7/EQ2EcNvbahclgDtUK28cx9TXel0BMP4lq4iq25gotgWmcNs8EAyWZeN/LDFWXrOiF5EKwLilZcoDAIydpxEgGPrQvRtE+ltMXuKxM72CjbtQnY0SYGSY9zVqX/AApNUInS1aUW7YG5WO45hTMkKD75E5qt27hu6gOpi0hyRy3uRj8OaZ/ET3FR9x3uwiZ+bdG0oRjaRke1V7SK0C2g3EAAGJG/gbewAHf/ALhXZj/jHgJdG3VOvNbzbUW57sED+/lZsYgSfSlN3rwCzLEk/wBQz9ox39R71d+hfswRkD32YscwGMTTjVfs20pWNpn1Bz/tT3kUor9nh97Vln3etGL1IwQ/zoZVpg8jyn1/z0q0/Ev7NbtqWsHePQ4P2jFUbV6Z7bbbilWHY81G7TJcWhp1K6r7LgOYJxg+34HH0NBNdCuWgEER94n9JoM3Dj2x9vT+9cz2ocrJsLGuabbcshwfuCP1r134f1Siza3XN73eABjc78kiduCZxwTg4rxqyksBxJr1L4dvBbRQGHUfw2/pO4Fic9wKpR2i2JnpV3StbtlfKEMiQ0EZmG9PfPf3ikWv1hQwvBgGTuBkjGWJJJj2oa71RrM2bqEsrS3iL4qi2qnxSqhjAKHkxxVbHWvE3uQ1tnYFFKkkRvKs4JG3cQvGPqBnmyzuPBRjbLR0+wbks1wN5mUKFUKIXsW7k478n0qdb1tJliMGQPUTiQOJkT7Ugvkuqn+VRCycBj5Tt5JMyM5zzURTwtzso2lQoJIOJInnGTJGfXuaxUuFOIz6pctrbNyPPJIdx8omXULHLARketBdF6qLs3UdZn5MgpgeUkQGEiRHr+EPSbjPdLkFpUjZDEQQ3ZgRETzj9B01Fq0jIg2DdvGBMDBloB+31qvy8tB+Mtmo6lKKX54OSB649+1C3L+1Yn8DP96SWOsF12KSoHbsR6k8mTUv7zuUqpzntz3/AAprLY9WYb9bpb+7N6n8Kyp/Ix6hej1sMZMjAIHbnn8q7t6glXUf9TsDgBcSpInJUwCJ9aTBd+6SEJgCe5z5T7Gak6cDaaLylQsAHnnkGeVjPB9vSsl4XSJxoLl0Xzd3eWwBYuMSsMpcxcA7wVBaCCF9ac6bRm4AV1Fy54LWi4ur2CSRNuJJkgnzDAmc1G/VVsrt4UhQWGYBmDPAB/MTTGxdW1pW1Fpd7cLAiSISSAMiBPGRHaqUm/UKSkkmE6Pqkm6XgwBCxAGTAzyf96me8l7Yo2OlwEL9Mh1P0j8opTYu228pkeIBkHsZ5nuTJ+opLf1vgSwVoW4yWVMku4w0lRITcCpMSxEDgmlG2LQz9oaraWBtUKoACjaBBAEDt+v3pD8CgtqBOVAB5442rH0k0d1v4S1t+3ab5nd237nWFYrKqY+XgKJHcDE0T+zDo925cublNs2WCtIIO7uD7xXdCT1RSjR67om8oqS5Udm3tEV0xrUmiJ1qt/EfwtY1SEOonsRyD7GrI1Q3BUtWXFtHh+v/AGc6hLoVCGQ/zdx9RTjpf7MIM3bkjsAI/OvT2XNb3VKiOl8R4j8Z/CraU70B2HnvBH+flQHwreu3LypubbncQC20dyfb617drdMtzDCR71Q9DpLNjqGrUDZbhe0j5LTbVH9RZpEAnGKmbcYuiciXof1TqqlioYlgoQ5lisEASJMmZPbP1rprbN5oVrqwNrBpjmWJ9y3vM1Dq+n21QFdq+YAhvLJZoU9pk/2ph0y4qqfDUzvOPmJgidpJ4E9//Xm3J+k2kuBGisBWX+DAyWO4Ybb8wk87cTzR2o6HavEQSsD+WJcdlM45/Wlx1JgKeRMt5gf/ABbIPtnnmpNP1Epz2xIkxk5gd81Sja78J+2RdS8a1HlAtyRtXlQfL5z7z+I5qv6k7gQLJAJYkKuV9SAAJ9Sff2q3M1nUght3aWwpH3GQJND3ulpaEKRtnsBwf6mOT2zTil+x7UUjTXYUL5grTDbQSDPBzgH60dprj2wYX2kiMeufWmmsgXJQCCIMR7R3k/oKHXSrcbBgxx6VE50zRdAjq29B/n3rKan4bHqayp2YcFbJ5ScFdpPGMcH2PtS/pHVDbgXAZkeYCdrFQeB+GKZ6bRm5bKmDyCQ3lMTnE/h64pVf0blDc2FAo3HfCljuOIk+bv6QRnFbLwXA1Lq3w2m3QGcbCO0eWDiQMnPb8aI0nUStxkJa3vgbdxYiPKZRRiF2iTkx7Uq6PrXC3nk+VQBOCWuSuY5IVXM/Su+hReubbrBGt7f42VUIfKquwIkyYUjM+U4yuijfDTlDXpLqTfLyLUolsg5Zg0ss/wAvl2mYwGHc5P0IOovgMZVn4U4KQ0AjsNrMs9wZ70u1ZZXEWzatqrAJCsyrEoy7TB3HcSfWTmnfQtL4D2CTO9lglSpEiFWCARilX8l+iUy4dWW0tl7bMAWUznaSY/lPr6Vx8OXt9lbxXazgFjjz7fKHMd4A+2O1BdR6fua6zZZ1Ph+2IwPWaf2NOEtKi4CKAPaBArthdmk2kkvbJVcGubrAd6p2p1Qt3Li73K7uAHOxiAzKCuR8wMehFVXr3XXUzY1KSP5XcKZ9IaKN0T+J+/D1YOKwwa8Y0H7TL9sxethh6oc/XmD+NWro/wC0HTXiBuKHGGEZJjtRvQow24i8NbFaNsUB/wDU1iZpfqfiWwuGuoPqwFH5Ij/HIZapI4rzfWai8msum2pYsxiQoCnYFV5PJ8oif6asV3420g5vKe2M1P1BrCWhcDCLpDnEbhBMz7SDJHb6Csc38lwTXwW6XpjrpbdsgXNrK/mllmGPnWRuXeAc96i0b3LguuXGxDtG1AittEOUHG3lZjsaZaZG1HlDfwWIDMBte5tJ2qBMra9+T2wZLvpnS7bqOPIduBA8piB2Ix2rJQclTM6K70rT77a3QGCOqlAZiNoE5GOP7V1dvW0tk70uLB3MCJB7YEnJPvGIqz9fQoob5jJAEgCSDyTwIBP2rzvxfCIUnyAEgmDv+UxiMAx2yc8mlkSx8JUbYRp7hlSG3MQC2DtOJAgD19T2ri9qC1wlQBxuEsJ4nEQJ9Pag9V1JAzeJ4mx1YFVXaG8oXgiJ3ZkR+tKtM7m5utFlVFLlfmZV43vMcT37niueOJPpoNdYGd5+VF+aTG05yMiTGYE0OurubptkNMHDSc5giurGstoFVhcG7IzPMGCG+gMzOKsum0Vp2S4m1VCiR3JA+aByTPNOSSFZCvWLkDyH8/8AasrG6kgJ/wA/St1GyF39EdmwVjMIi7WAE49T6faaMXp5t2pW74lk4cXDOxCMkNzzHMxQ3Qb/AM6M24ndE8nuJpF1LW3LbSu4ru2ugwCrLAU5iZIitVHtBq26I+s3rVsLp7doi5cd9qoQwYhvCRpPEsHgRQup1sbdNbCtsM3G2lg13h2EY2qPKGjsT/NTptObEhQqsALKnlhaQfxbij3feqj/AFGk9zplwF7tttxAMqRJ5DRA9a1eq4NIbdM1V3YyMVMfy8gLyIB4McnHc0cmrXcjm0q7GU+QhIMzw24nIHECl166qXbYVYZZu3Nvyzs2uJPzED8qF0fTt1w7XW6m9zG8nYvmIVSPlAO3H1qer6HV09fZ7d62l4EEeVl9ieR/cGj7JkV5P8J3m8dF8S7tUsDbghCQG/ilWyqnAB9Yr1HR3a7cctlYeoWdU+HbVy6txlG4eokEGJkesACfSlPxV0a49tRpytp1J5nYwIghgAcj6Hk1diQaHvWgaqkNTf082vfCFprCI6LcuiSWVFtLJMwNm1o7ZOYmg1+CbFohmmfmAnJiJCmPpya9MKKK5vdNt3dhYTtbcB2kcT6iolCzWGRRZQPivRXBaCq2zdAAbdPbjbM159qPhuHK3NQouGCBsusDPGdv5RXvPXdGrhSw+Q7gfTBH9iaATp4DBwBI4MAkfQ9qnTV8LlJZIrY860v7P2s3TvAdQCVPmDExjcuVGfem3Q9OkLb1RLam1aCrLAwoPlKr6jcoDle3sCbzrIt2yzdsnkk+wAyT6Ac1VOlWXuE3zptt1mb/AKk2xCn+GG3AuCBtPlU9+MwSXTLlUMtBdQAKScmTMzmPmLZk+1NT1izatiDhQBtCsSB9QDSb99uM5VLtossbo3MoPoTuG2MwuTkz60B1PR3XuT+8oV/pdEKgZ+Uk8/4am3HwWpLrviR9T5bKsQSwBKeXaCSWhgdx8vPGDzxSfV9MHhMIbeZ3MdikQfNljNw8jOBJgZoy11lbH8NLlt2IkLbUsSckjDZMkn0xQt/X3rwBK/TcjRyJ8wnt6CTGayk79HaXwRnp+0FRuKgncRmBuiSxB7z6RnjNNNF0wo4Jth0UsxubrZYkwvaCyD0BABkdsKuq9as2vLbMOAQNi7QoliwIbIJmYH5UHY119ra4uBXBXyoDvKy0A85JYmcc0atk3Y21rBiAAGAMhoILD1X+mDU/7o4hzcZWYwJkDzDO7dGcDuaRXurC0drQd22CIZlAkOrKSOQfxFO9V1G00fyACQWXafeFkn2juCaxcWvSfoYvT78ZiftWVGnxTAEoZ7+YVlZ6jpkVrQE/x2BVrYLMFEndtO1lEepkjtHpxJ0a2xYNdVvDWbjEjBZY2rJxuLFRye9MLvWNpVTIUiZBIK5xx9qm12thJcBg20bieRMAyInn8hVrLFsdsR3NUfFe64MEMYYKICgCBwIAHck96M0WiuKUuFypeTtEDlTBJX7H7c1z0hrf8S7dZrR3kedgyhT5VghQUEnvIxyKiTqN1NaBqQtu2Efw84YA7Z98RH5c1ag31mbb+EWp0DKxO84G3aYAExJDAYJGJyM12vUrC21so+y0F891gQSR5AVBGVBIIIJkxxFZc14uraZCTO63cAIHkDQHkjsd0Ef1d+1T6hoDfuDZJliizuYnzsBljnH9uKuMf2NXR6n8MaRLzDVWgdu1gXaQSpPAX3dQRjsTVjt3oNb0XSG02h01qIZGs+IAZz8pE94kfhUN5YNdcY6xLxoYjV1xc1wpXcJileo1S2/Ncbao5k1Lm0bxxJj3czme1O7Lp2NU7pXxDbvSLckDvBj8TSL4k6leS4rWLZZvbvGMgc/7U9qVoX49nT4ek63aVIPBEUg0upAWCeJH1jvVGT4z1CsRqbOwBZO2ZEdzk0V0/rqXgXtmVzPtGT+VZzyP1GmPEkmmx18Qat4Xw/Usx7BVHr6yRj0BoXpviXF/jO1zE7cBDPIKgAn0yTg11dsDUWbiFnUsBwYIzhh+Fb0emdLcM24wZMAfWDWUtrUkc39m2gm1qLaQFsqBGAirwI7AYjGKOu2kdYZARPBA7fpVN0PUC1wrksrNkcDJhRHzHinWn19xZVwTB4gnHMyPr3ojld1IVtMLbRqbm5bKCBG4hQTBwogSFycz9qh6hat7SjMqq3AaPKQMAT39/wDijrWoUgVB1AeUsAG2gmPUDMfXuPetGk0Uu+lN1Oks3dSiC4rqRuueUKWI3BYB7YznsPWnlgHTl0sZQAYLbhbGWIZmwo9M1WupA3tQLtiMDdukqBJO1Qc5CgduWaidVqL9q2+3UBAomNs5PIlgfFzknaDms7+FSiiv9e1FtrxZQjZ8yrIBIAgqYmPcelQXb4cByq7lBgCdvl4EzLHOTNRLcX94fxmOVJkj+aJzgfTjvXOpcunlnyCIA4DETJ9T/wCqKrhmbGtuf/GD7w+ffFZW7eo1IAATAAjyjjtWVVIdjhdfcJkgGCBJwNvfbMZ75pfptXduMd1wFQwAQSIG6d4UckDNM9R09flSA/cndMYB2jvM1zpFtOGgec8sFXfgQIngDvEfWs0opeEXZnVJg3LI3BiwORwcwwJHHMZ+ahtBrbyr4bFHW5Ci1ck25nH8OcmYysHH0q4fD/ws2rthrYFtQcu8mGI2uLfcnAzx71dOh/s/0enbxGXxrkyC+UU/9lvgd8mTk5rSGOTE2jzv4f8Ahl+oDZaW5pUtypuAbrLSxJFtztYww483Ak969M6J8D6LRhCtsu6MG8S4zMxfA3RO0fQCB9c1ZEgAAAADAAwI9BWr2RHrXVGKRFs3eUMCDwcVUOtg22mJK/MB3U/zD/PUVb1pT8R9ON22Shi4uVP/APLf9p/57U2uGmJpS6VmzrlYYIPpSTqnTU1FwFyYHacH60nu6sqzEDayki5bOCG77fQ/kefem3SNYlwTu7/Qz6EdjXM3seio6dGGk6Rp1XaQ+308S5A+gnFZqNPYBhbsD0lD/wA0S9lGXL49qSXOm2C0xLDucmhyr4KKT9bI+r9LtsCdzDETMTjvGCPrVv8A2a/Ci6Oz4hkvcyJ/lUx27E4ryv4k68PE8C2ZA+cj1/oH6/h616Z+y74jbU6fZcP8S1A92ThW9ziD7j3FdGPE9d2c2XIv6ItXUejW7inaAjnuBjmfMBz9eapevJtlkueVl5B9IwR6ivQg1I/i/pa37LGPOikg99vLD9ft71GWFrhhB1w886RpUKu6jzlyJyAdrwYJJKhv1qazq28UKQNrFlPoGH4eXEcTPpWuk6+2QVtMGKxuzkTxzTMWEFssA3icyzFtx9dp4HoAYE/WuTTZFPG0DoFVojBkg555P2rWvueUqCPNK++QZ+lcteYmCAPT8M//AJTSws3iSzA7d0YjnEwRzFO6VFpGuouLViFIVlG70mOc0h1Ks6jxCjsRMgEFWP5FR2PIpp1zXbUllOcAYJJnyhfeRVP/AH3UXLr5gyAZghQO4JxPP1zQoti+jY9GRLxLncY3ggRLEidoPzcms1jrbt+IBuJxidq8gD3af1rmxeUDztu7ZBgZzGBAn70aG3LBggDHGIwIo9fR00Iv/rFz2/8AGsok6M+laquBUi5aDpF+5cZNu5PVo2/Q+tOG+AAwjelvgDapOBwDkTVtsWwOBRINdKwxOc10Tpy6eylpSSEHPqSSSY7ZJx2o+40CoFfFdEyPStaAlF6t/U/56UHaMGf8FT0yqJrdz8q6bihd0N9TH40UKQmqPL/2ndBZW/erQyuLgH8ydm+q/wBvpVV0Wj8UB1MH2r3LW2A6EESPQ8EdxXnF7oo0l7arbkfIXEqPQ/p6j6Vlkw79j6dmH/J1VS8F2k6dfA2+IY9xNMrPRceZ294gf8070qAgEVz1J9lsn2/9/lNYqFemv5nJ0iga/wCGvCupqvDD22nchUFYXyFTIj+UsD9fTNq/Zt8PeFeN5GY2grosyJ3Mp47nAntIqz9Psutq2gMHbbDHHZQX/Ez+NO7CgAAYA4rujOoanHkScm/9k4MVpz3rgtWXDipMzzJfhtdNqb/hr5XcsDwFVgGCe+0k/aKl1OpCY8siPfv/AMUx+N7IFy1dkgkFY7Ha0xHqd35D2rzjUt52nBLHAyJJzXFkerZ3YsbyfR9r9dLDa4nmOZGZ+n1NKdfdZ08rbWVhMgQccj7Ht6UKtmDz+lFdPtG42wDnH48D/PesNnZ1S/xoxjbYY1nxrecAY7btsR3EjtxUK6FCoIt8gAyASJJBKtnJ+vpTLU2drNuPmK8KzSVVsNODJxxj8JI9q3BELu3ltxDEDxByCsysATj1HeapWcUeeAmp6VgFQQOJPYj+r0nP51Pd6cUUQQ0qPYzOft9e9GWgDJAA38MCFBBj+Vo2tIMEfQ80RbBBKuJA4PsYme47Y/wuhubfoq/d/Y1qnP7t/mK1RTJ3Re0eu1cn2oZGqYV6JyhNth6zRFs0Ag96nS76mgdE1wxmMVJaMioyZFRpg+1AE10wamt3gVn7f+hQzrmfWoWDTwOc54EdvUzFAVZ3q9QzqyoSkgjcI3AxyJxVYs9HKgq8v6kkkse7bjJmrQi5mM11dX2pUawnqtV4yg9Rv6jQN4nhtqNLHmC/9W2ZHmI/mUCc/iRzRd3VrqUtvbO5LrogInG5wrbh/KQcZ9KuB04NUvXadtJq7Cosae/ftk4G1bnAH/buO2PpHYUpR2CEtXaLuiiZ/wA5ogNioVHBqQNVGbO6xs1zMVsUEiD4w0m/Tk5BtndjMggqRHcZn/7RXnB0ouzcAIMDG0iYEZEcnGPevXNaocMp4IIP0IINeWXdObTEXA7m3MkeXzDEgxIwO3p3rlzx7Z04Mjj4DaLpiO+wvBY7VMHaGEllMT2AzgSaZdM0jWbhUBZ84DjzSQvMemQc+nvXF64mwNC5A+c7hn6L+h7VL0i0UkMdpDDiQCRBkCYIj+x9KxSRpPLOXr4RanR+cOqGYIctk87WkzA7H6UUloOjbYn5u3lKqwHAyQxGPRj6VvTpczvAAJEKSNwAABWM9we/c1FasLbPlXgkEkRPI9+xP5e1NGbBNSoULtWAcDPFsSuByCQsn/VTDROHA5BGD78/l+tC32VgJPGP5uQMyPQnP4+9S6S3tMnvmmvSZeDPwRW6g/eK3WnDPo7S4RRiPQLV2t6uhMKsYzXYoG1eou21VYqolEipA5I4zXFuK0zEHH+f5+tABA4rvdUVszUoWKBEbW5FYpxUgXNRkwaB2bVo54pL8caNrmjvBP8AqKviWyOd9s+Ike8rTl1kGot0jac9qBkuh1C3bVu4Mq6I4Psyhgan2+lJ/hgbbAs//Cz2h/oRj4f/AOsp+NNBI4pEslmM1xcudqjczWppiojvNxVV6ud11mBjJGPpEnHf2PemfxN1HwVQkwGJX3nEADuTSu3LCSCJ7Hn71jldqjWHOgtpY4x2+3pW204jcxBE/fjMR+lFhcH5QeZOO3HvXPiKAVI7RHtzGftWCRUmaZwfMByo9+f8NdLtjzKD3Hsfas3grAA/w1H7e351RDF+q020llPPtnnv60KJpjqTQe+pfpS8IZNZUlboAsZaolaDQ9vUipGaumyVwLW7U9jUGc8UAjV3NOxjxDUpilNnURTC1dmqTIaokViDUzuaHcyK6sNIg/emAQLtbZh3rgLXYoEZNcOgNYTWb4oAH0dra9zEbipPu0bCf/FU/CjGeOKgLeYccf8ANSNgx96Bsye9ck1w93tzXDGgQJ1hAyqSPlcEexhh+tLL5o7qNzAHv+hpfeOKykUiMtUbgff7V3ccZP4en3oY3PQwaxLOyO/6D8jXLPUD3jmef85obxqVkek9wihzUZu1z4lIpBEVlReJWUAbuXYNGafUSKWXGmss3YrUv1D63dqffNJk1FHWbs1aZFBtF6a/FC2zNSItUF2N7d2RWxM0usXYNHJcqkQ1QSr12Gk0KHzUm+mIlJxiuWNchq5DUAavuAJwIyfYdz+E1LNDau3vRln5lI/EEVz03V+LZt3IjcitHoSMg/QyPtQP4FYFQXHnFbutUJfEd6QCvqNzzqvoCT9zH6VDdbFK7GqNy47H+ogekDAoy8+Kwb9Lkq4Y9D3CBXQbFQ3TWYrOLhqC4wqO/cihTepAS3DUXiVC92tbqBk/i1lD76ygLCfFrHuUv8aon1PatTSKsZWb+ab6e7Vf0hppZegch3Z1FFWr1JrVyjbNyqTM2hlvom3f7UuRqmFyrRIxD1KHoNHrvxKdiCt9ZuodWrsc0xEj3JH+frSvoHkW7b7JeuR9HIuj8N5H2piagsqoZo7wfyj+wFAwndQ+pvbFZvQE/gJrZegOsXP4TD1BH44pNiXpWeit5AaY3mxWum6VRjsKK1GnEVhqysk05AZehb711fkUHcc1mwRzcagrzRUtxqiu5FAEaNNdM9DzFaJpgSb63Q26soAiDGuBzW6ytGdMRppKZWq1WUGcvQq3Rdg1lZQiWHW6kQ1qsrQkMTitisrKZJKlTMa1WU0IgutUFo5P2rKykUSuaR/FNwraYgwcf3FZWUn4KPov+Gb7NMknIp/drVZSRE/RXqxS+6KysrKQ0BtQbnNZWVJZy9crWVlAfDIrKysqiD//2Q=="
                channel="Swagat Senapati"
                verified
                subs="1M"
                noOfVideos={100}
                description="Registration Number - 18012276719"
            />
            <hr/>

            <VideoRow
                title="iPhone 12 Pro Max Unboxing & First Look - Max x100!!! 12x GIVEAWAY🔥🔥🔥"
                views="2M views"
                timestamp="1 week ago"
                subs="20M"
                description="Namaskaar Dosto, is video mein maine aapse baat ki hai Apple ke latest iPhone 12 family ke baare mein jaha pe hai latest iPhone 12, iPhone 12 Mini, iPhone 12 Pro aur iPhone 12 Pro Max. Aur yaha maine share ki hai aapke saath iPhone 12 Pro Max Smartphone ki unboxing aur ek first look."
                channel="Technical Guruji"
                image="https://img.youtube.com/vi/rtUAQvh3NbU/maxresdefault.jpgg"/> //tag for one video thumbnail

            <VideoRow
                title="Saw 5 (2008) Detailed Explained + Facts | Hindi | Jigsaw The Legend !!"
                views="25k views"
                timestamp="1 day ago"
                subs="116K"
                description="Hey Citizens, Aaj Saw Series Me Aap Dekhne Wale Ho 2008 Me Aayi Movie Saw 5... Isme Horror Legend Jigsaw Ki Legacy Ko Aur Aage Badhaya Jayega... Aur Isme Hoffman Ki Backstory Bhi Dikhayi Jaegi.... Enjoy...💀 "
                channel="Citizen Z"
                image="https://img.youtube.com/vi/p6WJphx7XL0/maxresdefault.jpg"/>

<VideoRow
                title="We Went For Biking @ 4AM | VLOG 3533"
                views="660k views"
                timestamp="3 weeks ago"
                subs="880K"
                description="THANKS FOR WATCHING THE VIDEO. DON'T FORGET TO LIKE, SHARE AND SUBSCRIBE.
                INSTAGRAM - https://instagram.com/ig_hitmaner
                LOCO TV - https://bit.ly/8bitMamba_goes_Loco
                Hope you all are having fun & enjoying your life."
                channel="8bit Mamba"
                image="https://img.youtube.com/vi/6mL2r4VyhI0/maxresdefault.jpg"/>

<VideoRow
                title="SWINGING THROUGH LIFE - NO PROMOTION with Spider Man | CarryisLive"
                views="1.3M views"
                timestamp="23 hours ago"
                subs="8.07M"
                description="The PRESTIGE MEMBER OF THE CARR333YISLIVE SOCIETY:
                GO TO▶️https://www.youtube.com/channel/UC0IW...
                For Business related queries: workforcarry@gmail.com"
                channel="CarryisLive"
                image="https://img.youtube.com/vi/naG-_P72FFQ/maxresdefault.jpg"/>

<VideoRow
                title="LIVING DEAD💀- PUBGdddd Mobile Lite X Tokyo Ghoul || Hit Maner"
                views="333 views"
                timestamp="3 weeks ago"
                subs="17"
                description="A Soothing MIX of PUBG Mobile Lite Montage with Tokyo Ghoul AMV.
                Watch at 720p60 for Best Experience. Plug in Headphones.
                Tokyo Ghoul Clips - scroll忍 - https://www.youtube.com/watch?v=2fUFI...
                BG Music - Sixthells - Living Dead - https://www.youtube.com/watch?v=h3C4R..."
                channel="Hit Maner"
                image="https://img.youtube.com/vi/gZ27B95DT7s/maxresdefault.jpg"/>

<VideoRow
                title="Angaarrrrrr (Official Video) - IKKA Ft. Raftaar | Sez On The Beat | Mass Appeal India | New song 2020"
                views="3M views"
                timestamp="3 days ago"
                subs="567K"
                description="IKKA and Raftaar reunite after 10 years on “Angaar” with music produced by one of India’s premier producers Sez On The Beat of Gully Boy fame. Angaar narrates the collective experiences of both artists within hip hop and society."
                channel="Mass Appeal India"
                image="https://img.youtube.com/vi/GpjrKSyjXDE/maxresdefault.jpg"/>
                
        </div>
    )
}

export default Search
