/*
== Accurately system of calculating the statistics for the Hero based on their profession and level ==

Run in TypeScript Playground:
https://www.typescriptlang.org/play/?#code/PQKgUAvBAECCDG8CuAnAhgFwKYBsCe0AznodgLbQD2AZtPGjsjpgJYB2A5tBgBZZEZWpFvELRqlFNz7QAElhSVoAIzSEsAEyptpWFlIAOi6lkKEWlHWjZacWAG65oUMGAC0b6AFkAkgBVoABkRLDZ1aA8wAGFKAzwUFg4eDGgACngASmgAbR50ZRY0AH0AazQyFlCAXVTkjANCAC5gYA4WXiRlADp4SjJW9rcyitCMrrgcHGgEpIwxFFMFRw0u1wAFBQqzCx0WMT4F5QIOdDZsDQAacQX+GjoeNBQOLCuMJWsCAwVCSyplQXY7C4aDosTwYDuvD2RBoGAA7o9+NYtGofvBCudoBpKMgyKFBBgduIWHYxKlePwAEQAZVhCIWlIyryUGiwDDA7F00Fp1HhiOgcPaPEoSBSC1ICXghMsV3Y8BwSA0QIFQpFKRwLAqBKJFOmiWShDAb2gSHUV16cSuZEoSuoeCtCmeVwMnQ1hB4VyVEpYylFLyIrpCYX9yOAkiIuBwYAtlTEkJkPL5CyuyO4Si+KC10AzPzCaYFwoousT9P4ezA1FQbD2fC0xuxMKuhE6ACssFL87qJJNKILOKCbO0dk1XH4ZGhlJRHKC4jNktA2JRCfAkTZpNCM1tzL9F8v+O6GFNlGW2PLFZpoOwwIeZ7GqFJm8pSNZCQxs5JpXn4-wS4jVmA-FkABRbkAHkADE-AAdVgAAlECfGpaA1lg0CADUfAAESAzDoEpWAkMQykrig-xZFAgBVAIYNg2DYAAOT8ABNaAILgeiWIAaR8ejMKuICAA0UKA6kkNA2CwB8Lw1kCHwcKuHiokCCjMJ4gBxaAACEqOgejQICWTfD8HDoD8UDTOA6AaLoxi5LE8DvCA2ColkBi-FgTSfFk5iLjAcD-HokSkPA8S4GQuC-B8KIKMCODkIo2C1lA6kQIY3C9PonjwNg9SgK8IDGPGHjdPMoC0IKgJqVcwJAgsoCwFgKjyNgsTYOgKJQLWJicrU2QAnIwJsJarSQNkjzAhAkK2oYlilNgKSrkw2AvFgNSRNYtr9OAiSxs87ymJI4DAKc6BioYuAoki0D6NYhyOsYujLquMzYICUKtqc0iUquODEPU6BstArxfMot6HNC4r7sCy6fGuqyyLqsDIJokDQuO6AKJSjbWOOtrsNgWT6LUwj6IAyzqQg6C4KA-8PDpzSgLU4q1jUtZ4s02SomgTigJYjnQKiTi6ciMgAEUeM0tSsE0gBONA4QZ2BMIolAAEcZa8AA2LxWgARjYNA-BlnBON1gBmKCAAZddkAAtNC1h4MhYN1tCUGoABqTTVc42QUFgNBNfsRQMFFzCBbAZRLfAnA4VtoDOIAJjUuEkFAuEvAADiA1XNKiICojWW2sCkgxbddj2AA8AFY-DWauDCAgAWDBeYwKIW3gfxbctsxNc12AEAAKUT-zsLAeiyA0Hg1jHHhE-o4BwN1yQmKiIfK+c5bm8tjgzerziyA96gNHojRCCg234CgzX5Y4CjNbQxeeEzkpwLWAB2FAMCYlB1BYFsYBAj+QoqBYAmEsBmzWCwVatsOBqUIBwWQaBkotlgEPJiHAoKBDhPRGWmtM4cDhIEewGAcBQRyngTSldVYAC81hQQ0CgSumdKB+CQJrDATdqQ+gkvAW2ttM4UTQlgMg1gcLADQInYAakEFIGoLAWhaAOBAU1phDAmlMKcQwPAew4E9g4B8PYOIsFOKEF1mgCi7BYAy0rhIAw9hda2yHhoKIHswC31gnCUW4FqQ8GpKKVWqgGGV1kDgZyAtDY+AVHCGWsESFrDWNSagmtqCgQ9jgNY2IkBwlobbcCH8NDgU4vRTiAkShm0wsQDgmcOSyGpC2PAtDNYcHsDIrw8Aohx1oRRJA1ceDUE0rIEoaFYKWx8LbGu4FM60LIHCDQnEKKi2gUBCiFEy4e0CFBcC8AeAsFAr0LAyhYJYBbKTJi1dqQCTNsXSgyhOLgWAFBJieBNbUiHqHQgKAUCwWoCUYAXh1EYKYjbGWv8ZaYQ0JbD+oFYBJWoDgFsFFaFIAoonKC1Jq6iybgYVoaEwBqU0pQGWLAKIiTWC0vw-SSgIIwJhNCshRYtl1l4W2mFAgaDUtwlsmTsWIswkgRRmE-DwAEonWAUFzEGCgoC2CTFNZQWriUEoqtrwUUoLBFs6iBKyDaWhZQHsgLwGoJxSgutqScRKE3auXgPbUl1vYVWLBaHUGrkPTWtC-B+EmWvTSHtQJkAwB7Pw4E8CcU1qBBgTEsAfygnnMAtCh44EziSASaAoJzLNuBNAXgOLUHogYNYlcmKNU4CwJuidVaZ3PpbKRidZCBFVphagqsfAERloQASkVNaVwgUQuCsBRYeSNE5HEZB9HpvAtQKR4FBBQTQkgKKwoNCyC8fAWhU5AiJw0AYTlPBdZMRYNXFsyhE6W3sLbROOBLZbN4MoKCkwCglA4GAFmd6H04GUC2IC1d9JoQQLIIe9hOUyyQIEMgutMmUBKNFUWot3Kiw4LAUCxaeCaSzpbFAtCZZnFgJrQgfhqCZxbMfNSTECVYC8NLagts2CaVFkPTg1BJWwB4IQTC9HCBDyiAgHjLAoqaR4BRTiUREOxQ4KLGCHAvCaVY03VyfBB6wEoEPICLNyNSyo5pGjbAWjwDWMAOVQ9q5RFglwp1vE-AsDjqrQjZsFZHPongPABhKmi2rngWQZAyCZywFksgsAm621ZCFVWaxRZgGPWF6tlsmKW0wqu2AlcXoCVFjLAwnFNIoBKJrNgQ9U6Vy8F4VWUQBIUQEpnRuTdYD9HgCgFsshgCBFkFBICfhHj2BwDLNCYYNBgEWSUNYHAcBtF-phTWPKm6zwMywAwsFq4aCfmsPAZtKDJGoEPYAUQguyGrlBFOy3JFlEtm2Fg9F7XKCHmhD+nEZb2FoWAFsJRCCW3EkBNgWBWge0ZdSeAosUCFPgKBEoldOJ4BYJxJicJYaJ0rmwJiHs4RKrhJXTW5XKDlBQJxAwaEhGYSiPRVFEb7AWzAPYTCPA8nKHsPNjqTFKBE1odXauJaeAtjYLBPAmdYC2zhHCHAGhCn0U1vRDATC0KSDUue+iUoPact02pM2PhnjgTaCj68OKmL2DwC2Sgq7daqziMapuMtbZVWAEPZQgRceazIEgD2IuDAZM0HCSggLZBsb9tO5QQFM44GrmsDRObhM4DYPivADc8A8HLh-ICNXKAsBymwHwlBRaaTYLregqfq5oGJdSYAvomICVobBFA8AZbC6bgzWQ4FMLUgVgD11wBLaJyUppIpYBQJ0JQInD+alM5tsCCgLwtDM6W3bm8WC9hZAf0ztSEosFaHUkzpXQI5t4BW8IPRWC4F6JoB4eBP1dDOJqQZ2wASTceCVzQEi9xmsUCyEzvLNCnEm5mwL8oeibTOI8F--AMgH8ZAqsos1YWA-kosGAJQMs1AASZsT2La1cmcgaLqoEKAa01chAmcoEZs9gosJQXgaELAAEQEUEwAFEwAlcQ8PA8ATcoEGAqA+G1Alcc2ygUQXgl2ostshATcusvaH8E0msOA7yLAaklEFEOAtG88lAtszyXWosj8BgtCUQ1214UQqgD6KAHy9glsJQsgZwgQLYZWoEEEI2aAUQMsHssEporiTEu2KiJB1APghaUEACawSAicaABmzylsSA4s9Eks0sYAcsCscemEygHAOqTczKQEGgLYrIE0PgJQegPgE46s7QeAMsLY1Afg1sKA9g2OyqKAmEosdqkslclAmkTclAX8sAaEFEgKBKZgJQSKcILYaw+8eAgQJQduCKghgQfgBgOGdyx6RGxSH8JQmStCfqv6gQ+IAkmkLAicAkUE4stsUQGgLmaEXSakbA0QsgTcGgbAZc8AaKlc1IHsZsduLYD+UEbAXgQ8wQvmxkmEFaZsZs9EHEnEZsic-cLYPAsEyxic7Gyg4EhA1cyGSkFEWAcI1IXg1cYAHAnEwAH8ls4sRcHA9E9xawHsHAlchA96HAqsHAlstsRcJQlAOAhasACcQyziQEscSATcnRSAPAlstCoElAHsygPghSOAdKHAtstCygDUEe-yOAH8FEMsQElsGgUEAkMBLAEg1IsEUEmRWAyytsHsqshAVaWAUQJ8tsPg667cnEQ81ICCJQQMygbAqsZGqs1A4E2sCwlcHIHKFEyg1OTcXgnELhTENpcIuhakMsKA9EicnE-CZAlcSAH8HkLAmcKAOAyq7KnEawS4ZsTcSAusmklsXghWQ8akJQcI8ASOXgnU4IsgmsUQwAGW8AbA1IrIaElcmkz2mkts92BggQ9EsgPuIUsAJQ9gHsnEJqmEXg0EmcmEaAussEosLWicSALAOGaAmcMslAWi4EsgtCZ8UYic4cwAmkAS4CakhmGWLQl8Pg+ylcixJQeA8iS+OAw+sEkp9uKUmsPAnEsRlcygBgZQJQgQmc8A1cLASA3q1IH81q4EkcQ8lssgcITcAkIuaEosQJwm8IlAtesAAkH81Y3J1ALYIUTECKSA9EahAklcKAmZhOsg9c1IJCMsQ8pAWAMsAkLAlsnsXg9gYAeAsE8AmkygaEakqsqsNgcIZAygH89EEq1ctCgQnE1ImEAk1cPFqsOAqsGgl5tsN2lcTcfgOAmypq8AECHsosaEXJsgic1cH8mEfOC6awJQYAPsBmcGZAjCZAnk7QsmPgZsPA96O6wouZ8AhuawXZKAUQbAUEQ8jyMsmkmk8QH8LsfgcIA6Q6Cx4sic0VHAmk0Qg8HA+iQEQEtCS+9gawicWA8Wqslci8eA9cmccCtsTcWl4EMsZA8A4ENW0swRUQKciVUQHAJQosNVAp9VTcjVeI+K-Sg8LYaEZcOImkY+lYqsZALYTExSI5C2UQqsqiGgOWrWakpCTEmEqslsdiFiwA9gakXgpFXg1AhAwAHsZAM8mKqs9mHiCq4EosB6TJkCmEkEGgZAms3sSA4ESAawHUJQH8F1Q8seus4CKe-1BgWiLAQNic9gH8usgE3ZACHURa8QZ1dlAkXgKAHsawtCcJtCLAaEDpQEcGcIWAtCicJwQEeAGgmsZWSsHsXcUEGAeALxPAUQj8WGqsbRaAHsFEQ8aAsgAVfFHA1csgFJicZsYAv8YawAtsMmF+3ljEzOpuZFJ2oEnQsgHAsETcygGcawusakiNu8gQoGoERqVhsEdey8XglssEXgielAyxTEtsqqBgX+dehAbASA8AH8osLAkyoseAYutsIh1gtsXRsgdqhIlcuONeosi2gQXgNN75bCUQBgygTcak1c5c9gTclsXs32GAsA14tCOAlAKkbYsglseA56ZA9gXgMZ8AwAtIaEtt9EFEjglsMqAdJ+gaHA9K8AycGqH8GAusLYYCHs5FvQaENNfg9ghAakRoUEHABgXgsREVhZH8-ObAcIwAosYYgQs1fgp+amicTcaEgunSmkWAfgSuJtXgO5BCF13Fva7mosZAeAUQH8MsragQYAcIJV4EmYusx8Ap4DlczKUES5KpVisgusXOCVOAwAaEfgLYN2UQTEBgUQQFUQR1TEk1mhHsusKARd96xybA2xD2aE9gaETc9gMy9ETcZAUQZAnE1c5COAMBbSetLYmslQocUE9Els8AaEqsKO55akH8PA8i0pUE1aUFD60y9EtskOakQ5OJYAH8wAmsW6cKFSAkCWXggQbAbAygosygPA-hFtTESAfqmehaXgQBHsTEMlaAV2HstsFEGVYi3J7NtamE-+ygmcDab5YAfioEMsnESAuh1+YlGgtCccicnATEAuPO-2gQUQ7KQEvBfgpWGAKAGgvBKq+yB6EAkAJQRRoDwsbgBUuELMbMawFEHMUU3MvMWkgQAsQswsYAIAwArgvQYQKQYil5duZA8gigsxjgUwMAZslslsAA3NGJYKQNAHYIs4nGjXkKYMKALs4NAPsxs5sxM5eIQE-RIAsAs04DAOSIc+6BSRoA8zgI0AuEgKJQoFcLs7gF84Hb8ygFkBAAAHw7MOBOAAA8MAvA4oxz7z0LOAGz4z2zewsAvICgHzpzzziLbzHzQLPzx4KA-zKLxLILYLkLALUwkLCLRzhLKLaLWzKQzwGAHzhAXgaABgeLtLlLpL1L0AAA3mANAOKwONs+KEgHyQKwoNkFUKcx9nCHAN8mgHgKkBkBsxK+IJIKkHYCkOwKyJXKc7rGs5eDYFgCawAIRQBQuLPmtGtWsewexZDCvQBis6sSvSt8ldAujuipBOuVxauevisAC+2r3rWA9BKAOgPrGAGzEblzGLhAQEjgbAuLTz-L3zVLzgNLKL0AAApGc84Ha+s8m4a4QKBBoMi4s3yxSzm4K3m9ANa3sGm6EB8-qyiyG2AKED89AJgGUz6H6KmewHMCK6GwDCwNODANXL5Dq+BCKFIDAE3POxK2ODcKc2bGu+KwlUoDAInDu6xB9qa2AEm32xQM+BgNmlKJIGIKKzq6AHIGyHyTwO+GO2SDwAYFkCM5O7IAYNSGU6EBwLwLBKwPu9AHO3+wB-QBqJwGB9KKa10GbB-FBzq-+5pGoFgAhxYKc2er5JO0+7ABgIIPACUGkL9RwD+6Mzq8R6R-gWgNMz8zhxBzLGhxK3R2gGR5h+oCx1uwR4+yAHACR1x+R4QF8BeKkIQGgNR5O5x2R9SBJxoLAG0BqFzUSoHYQHxzAJbF0Ks4e3JyJwp0p14DK4SAYPgNp2c0e-JyUIp1gJoCpySOkVZ7py3jZ0Z3Z0pzx9h+B6a0e4R0J1EAkCkLstYCuGkHVu0LJzq8F+0FEA8KeJRmZ7NpZ35zp3pwZ7FyFwl+F9LFh1Z7rAJxK0+2m2gKyGkA4OV1gDFxK2V6yKZ3yal1xel2c5bEe-V1gJhNOywKyFZys2exc1zV8M+4oBOXOqqKKIB5gGIDAA+xK0YDQKYNuGwF85SIg98hYCgJSNAAAD54TcvPA7f7eUh+DoBkcKDHd4SyBIBnCXd7d4SaTMCsgTlJfbcPeUhrAMDlfsDESTvZvAukuDdGgub8BzOrmYDppCg+fTfjswDg-jdQ+8Bqiw9iAABkE7Orqg6gqPXz4PMPBIhoSbw3YPCgEPE3vAsAkwqPpzCPkPLhvABPM30AGP834rV7TQo3lAqPwPJPXPTPcPmPErY7kY7YGAXzbPXr9gDASAWAcrKAk7YbR7EowHvAEvk7Or0vCocvjbCgivR7yiznXN6vXrErWvsv8v+vvPoPXPNPc3k7VXrIo7ZwnPkvmvMvOvgPevOrSvDv0vrIuXSXJvpv0A5vnvJL3vErvvOrg7on9nmgwfpvYflvPvR7UX7ciXK4ifUvHvKfUfBvnn2f7v2vef4bwPFYt3UoRIsHPFWHPgd3kwYvtQZPawigGYxvXPiPDPwoU3hPbrk76LKQ2PJcDfdgUozvgvg7CQvo2AE-hAXQG7Dnkb4rg-0ABwlAHzsEGOv1PLpz7LnL3LBgzfigrfsQCgXNXQtLIbOrk7hAgoOiPAx-lAp-7feAfrxgy3Ow-fIfdAWHj3z3XXPLtt0aAa8JW9AcIOt0eAJBJAlIEAT-3AFUgbud3YAULx-7isn2oAtAaZD4AEBoQu4aAOy0JD9g5QCwPEGcAHYpBDwmAr1r+ywHisFgMbHQMP3r7YBG+4-BPC72X5esk28Av-p92+5Kg2AsA1AWgIwF0CvWQELjm+1pYWs6sbIdQGIF1BT9h22AOMLQF1Bfdnu7AOAeIJD66wugWQI4CWxF5sCUgBgDgRgCk5ZBPAGgVAMqEW7WhPw+YawNAGhY6AZBqYY8Hc34AOClwOoJQDIP2bUDxBicAwSoAIBmwLWrAsfmYIsFWCIgWIOwf2F8FODjQLgtwfaycCpg0A2LQwIoEcH+DMhUwIIboJD5mwwhRgxOFENF4dhzBY7eITYKSFcAUhhQlwTaFsAotghErWgXQIYFVg0gygmfn5gsHz8920AITuv037b8xEBgLoNQBJDYAUAqQfECgE6IFsIW1zW5pICwCdtaW+zRfq8wFxXAVhawxZlkDR4Y8226bTticI+YZAxgdgTgLwCyDuJShXrVIIMJHYjCF+hzfgBMLJ5TDyuMwuYQsIUDLCzgqwzNpC0xa5DdhKLfYS8yRbHCIRpw3AOcMuGptrhKLcEWU1RE4B7hl-VXjwBeFdC0BHwkjtPy+EfsF+rucYWvwBEost+QInliCL5Jgjbh6w6EVWxrY3CURdwh4USJJFvCsedfUfmLzn5cCfekosAXwLO6idLuRfEPmILeGSDdkRQ2QQsCw6KDxwFIlQaYCoDqCZAcoi7igB0HCjxW+gwwQQCqEmCYh77M4A0JUBYBvB2YfIX4N+DGhAhusUkWgNCFWjjBYo2oXEMIDWDEhCQZIW6NSHvAdAGQjwWuByGLDXRfQd0ToE9EFsSh5o8VuUP9E2jAxsQ+oSGISG2DwxzQyMa0J0DtD1R2Q3IUmIKEeiAh6Y70eIJ6FYC+hsbAYbqKGFz8aRSgf4fM0ZHTCWR8wtkUsI5F1sNhewLYfc2xF7CDmBLI4a4L5HdsBRTw4kdAFeGZjyRQ7Lsd8LGF9iN+A45kbMOHGLCcRkIzkdcyxaLC4RezOcYywXFji0RLPDEe2wzbYjHx+IlcSBzXEbjzRW4ykbP13G-C6Rkww8Tv2PGgjRxS48cVyKvE4sZx8Iu8YcMuCLjcRdw58dc2ra1tcAZ4vEQSMeHfihRmY5gXmIlHUCeBIfBAQd2URYBhBbvJUUJx9E6tVR0ggtiQPkH6ilBnYv0AaK5CHc5eTEvQRUIIDVxqhpg+0ZYMLGeAvB2w2sSmPzBejBJpvP0eEOgCRDbRYvCSY6ITEKA5JUY9URmKwEti0BbY3YDc2dHbCbxuABEfOJQnr8X+5-N-lfw9bCiAA-BQO3FUiXeXQfRNOH3EOTv4TkzocKK+b-i9R3Yxfn8KKE2T7xGgF4R2M8mATqRvkqKU-wCkX8ZBngLtreIOFIsEhuse4dfxD4UTw2ibC5pWFPBOCa+BPBYKuLSlt9HJePMnl30m4YBUe3-MAayxUBYdAOtU78XP1OafCkp3kxdqgC4Gr9QJizLToON5YwB9+KLLljy3qln9AphIs4Rcx1Z392guyZaa-3f5LdtglgDqabyomUgnu1XV7iuBQH0TTeoAJSdABYnqj2JWorkENNuCGj+A50irpdIUBmjzRlo1SZEJV6ritJUksMfYLLH1iB2FYmtuqPDAySFgekwoYpMzHisVJlQgQH1N4CgzQxxYiGcmP0npD02VY+MTWJaFQyUZdA4yT-1MkJSAJww6kZFJAkMippTI8CayNPEfjm2k4iydOMWbZTrJSEpEahPPFnC9u+3PYFhN5FoTlxhI1cfFPukSswpO4xmbSP3Gcs2ZwIk8eyOgmPNYJsIhCTlMRFvNkRMssWRcOuavjpZostEV+OeHrjFZ4rYfr1KJFkSf+JUr1qdI27QDrpPo5UaUMekyDnpCg16dxOwC8TdQ3srbn9OFEAyjBTcTGUSJxkJCEZPgyGamIbF1tDJ5o9GSJMTkgy6hDosGTpLyEEzkZjYn0dTJD60yeZ3gqyTgBinISrg9khqatOcn3T3Jb07sSlOZkn9W5GU4KW8NCldzvho0qQEJ1nG5S3m8U5WV5LmA+Tp2qUluStIHl1tPAk842QLnuHSjSp1A06ZoJ+5CDFRt0xicKMDlsTTwmokOVxMSn6jvwyEAQdoMdkWjhJJbYGd+OTmNCSxSMqGUTNCAkytAqcn+RnIMlNjUZuct+UBwLnBjcZTQ4Bc4JjHEy4xKIMmenIUkVzUZak1+UDKgUfzC5kk2Bd-PJkgK2hsM2lpXJo69Do2-Q2ecNPnl7j6R-Y1mTNI5k6yzZeszYbzJ2GGzBZU8h8brPxEYSrhHbd8QIvwmCiHZqM2hQzO8kMLJpuAaaUeNYVQT2FSzfWdeJ4UNyhZJskWXhKEWYiRF-Mj8eIvlnriXJm4keYzOAnqyFpmsocZBNwlQjMJPI0RaopMWETJFxEnqbgt4BuzipO83-hAONFJFgBe8vgUgMWGwCwlEA-iXRL9mnyVRUgp6ZfI4naikQYcu+R9NMjncQlwACJQoABQ0SY5bwuOQQF1j5y8FMClOVwvgVpis5YCoyZQtbHUL2xtcyyZosbnCzl5e0q-h3LpnhTvhoEE9v5P7lBSxZv4t4c7J8UzwRh904eRku7FDKopG82yUROFFTKsZMyj9gEo9lJsk2FfSqdXwYC191ATnNThq26WNTO+9PVqe1JEGr9h+Zy9IgNJgCWLZFvw8aV1PkU4BFF4EvftGwP5LTLlbc7thtIlZbSH+u0xyftJMCHS2Ax0z2XwK+mAC3ucS8QXdLPlJKg5KSl6TfPpkRyZAyK6AD9NNHPzoApSktob3OWfzwZEYsub-JhkdC628MmpcQvQX1KyVECyIVSvSI0q8ZdKusSQsQX-zkFA7VBfSpAWUzGlPo2mdIoilqzGFB45hUou1kqKbZaizhXXI6XaL+Fbi8Wc4uwk4BHFssgifbI9jmK-xby+hdYsVUayWFqq41TBMvEGz+ZKy2KabPVXojLZWIoxWIrtk-jn5jy1Ts8pGE7KAlXsqAVtzRV0D-Zug8+XW2DmcSdRt8glfwCjmSBilpQileUp5Vc0aVQCtlXUqcDZyf+Vc03jXPMlarXViEvhXZJb6jK1paIvpUGqN5VURhZiuVYMuGWKr0pYyptSFO6mnLg1XNAaeas7XUilldIt1chKKmm8PZOrfeY-KPkiCf+sa8QfGqcCJq0lHk+mWoK5AHzBBma3QdmoHbDrPgVSr+fjMFUILXBSCgtp4NZVoKi1xQhpWgLLVetZVVq+fpOpsXKr2ZDqrmROMrXtLq1Rs2yR6r0UWzhFb431W4v9VrL1lWHJ5SOtDXkTw1sonJQqJXUMSLVcarFRfLkG4rk1u61NdkvlGkrMFFKqobmvPUFjQxBap9UoH2ZFDOV2C09a2r5VwLC10Y29SKvvWkzEx3Gs5uUvIWYLsxqk6jWes41ELGN0MqgGQv40oLBNsm5jaJqplNKTJLSnQOOtkUKrvlvyrWQ4sA1cipx3C0Dbws3koTjF8GzxZaoWVATN2v6hRXYogkjjHVHCmERovM1aLa1EG9CVBoMUwacJ1muWR4vNXPydN9CvTSzOc32qjNAi7mYQDgkoB65nSnRcYv0VSzXFnqmzRMsmVIaz1fiudehogH5LfZ6KhJQHPw0JqcV184jXqNI1laj14gilaJJo35rH1Eq9lcWtfXCiIFCc9rfgu0nirr1z64TRQplVabNVIGnCdOq6X1qV5fawRX0q-ULy-JPahtWptKHzLb53cpdlOprWWaZ5q2nuUJyhUgq150UnVXFNnXcCStVIWJcfK9Zrq6BG6qYFutDkpr75-E5rXQJPWDaL1Tol0UJqlVvqNNNMqbW0r5mzbDt4GjbYtsbXLa3JO6gZROu7XArV5uAOZf0pVneSf1V22tfFJbXnKitd2xXmVNcAVSq+vwdluD1R7naO+dPCnmhm8UzcEVE0l9tjPt4-9KQYfYQdy14BdBFAt3DQKkB9FScCQN7N4H-C6AYcCufnITgLp4B+tewqQJXV0AqBsAGdS2q4Cs0thMgBAmAKXXe1l0wcGAQIFjvcI7UY63+Uymbl0HfmC6w+dIq9sbpl3-sXZq4y3dQIyDk7XAC6rqbHzI6nMbpeEPnV8yh1maYdYG91fDp6XdsfR7k13Vx2l3z9bOPnPjmOtW1yKFt8es4T6K+bJ7b2Mu9PfLsQ5Z77Nqs3sQTqO0drs9Nq7XYjoSFzbp5vuqUZO0VJbjROXQZ3eCxgBF7U9XQWztyyY7OxwOWQIPSUB70e9TmA+k3cPsY6ahmO4HMFSv0D2ed4+WgbnSH150e9hBhOEFmLvEFq7MAyuzXRLqN0p759G+kzilws4tdpQTYSXVfpL036HOynM9XxxGUI67d88mjdPu17xT1dUzVIO10N3XsX9aet-Y5zPUadTQX+tIDbq6C-75+-+53Z4F1irMrd5qufa-vo6b6M94+roG8H0SVxNAqQROG3pD5UHd5A-Lqen0D4Rdt9pvXfdr2EG4H5+cXDPnl0IPl7wDbuzgzl0z7Jcmu9+hA0ga23QB9lAeq5o7xkWC9Q9rB2XvztP1C6RQNgRvSga6BoGZ9wAfg5Aa6Cdduu9gXrr52lA0GpDny2Q-7z1LCGQ91ApQ7RK+bq7hdGhuQ92Od1CcODhhmw413M5pdEOehiQwnvb2TtaZoe9wyMKPY6s5DjBl4NQMn2b7ojYAoQ3l2SPitJ96R+kQwF4BHs9lFzA5dTp0C06yeAvQgNrqaljcblyPXvmzpEHhGHDGkqUNGqwGOHhB1U0UdEKb426LDqfBw47p4AtG0BbRr5h0Zx7TLtdvR-Pg4Zo1DGed4e3-owB87IaLluexyVMbL7t6k2VOpwSUaqOCB1Algm3ZUfJ5I8e+bUvvvcq+VrHAp3fMoycZamM9WdCh6gV0DeM26sjKBr5nsYqLPHyjPRv3TIe2Y27u+VPIQoTwePVGeAYJu3thvFZvGugIJ6Hn8ayOUgOewgn4-TqRNPHxjbOwE1G0YFx7HJoJ6noTwp3JsKSWAS-pQA4BH6JWZ0gAcSqAFpA9dGQP7jqx+OI9DjqQRQ4t1hUrdhBDJi6UAPZM77aWwgvXYr1909t0WlJ6k7ScnaQDNu4YVIKydFPitOTkPbk7yY-5wrBT6a7bqifFNfNJTPvaUxc1lN2B5TdJ8VvwK0Haa1TR7TUwcejY8mHDfJz-pYEFMHrfuRplFhKdWZSmwAMprZnKdroKmdWp3TDVIFVNYH1TBA6Nkzqw6WCdTB0gU2t2CWXc-TizAM5bCDMhmwgYZmkzaeu63dExsZ-XfGedPJm3TPOj03qbW5lb4zkZ402pMDNmngzFp0M1afDMlnKQ-Elk3GadOJnmpWp106mf5M7BBTsS7M7gFzP5m1mQAA

-- MIT License --
Copyright (c) [hrabia_kamien](https://github.com/git-kamien). All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=XL4q
-----END PGP PUBLIC KEY BLOCK-----
*/

const maximumHeroLevel = 300;
const level21Threshold = 21;

const isBeforeLevel = (thresholdLevel: number, level: number) => level <= thresholdLevel;
const isAfterLevel = (thresholdLevel: number, level: number) => level > thresholdLevel;
const getLevelsMap = (level: number) => {
    const result: number[] = new Array();
    for(let index = 1; index !== level; index++) { 
        result.push(index);
    };
    return result;
};
const isEvenLevel = (level: number) => level % 2 === 0;
const isOddLevel = (level: number) => !isEvenLevel(level);

enum attributePoints {
    Five = 5,
    Four = 4,
    Three = 3,
    Two = 2,
    One = 1
};
enum statFactors {
    /* Health points (hp) */
    HpStrengthRatio = 5,
    HpScalingRatio = 1.375,
    HpBaseRatio = 20,

    /* Attack (dmg) */
    AttackMaximumRatio = 95,
    AttackBaseRatio = 3,

    /* Attack speed (sa) */
    AttackSpeedAgilityBonusRatio = 0.002,
    AttackSpeedMultiplyRatio = 2,
    AttackSpeedAgilityRatio = 0.02,
    AttackSpeedBaseRatio = 1,
    
    /* Crit chance (crit) */
    CritChanceMultiplyRatio = 0.02,
    CritChanceBaseRatio = 1,

    /* Evade (evade) */
    EvadeMultiplyRatio = 20,
    EvadeDivideRatio = 30
};

type HeroDataWithoutStats = {
    profession: "Warrior" | "Mage" | "Tracker" | "Hunter" | "BladeDancer" | "Paladin",
    level: number
};
type HeroDataWithBaseStats = HeroDataWithoutStats & {
    baseStats: HeroBaseStats
};
type HeroDataWithAllStats = HeroDataWithBaseStats & {
    stats: HeroStats
};
type HeroBaseStats = {
    intellect: {
        value: number
    },
    strength: {
        value: number
    },
    agility: {
        value: number
    },
};
type HeroStats = {
    evadePoints: {
        value: number
    },
    evadeChance: {
        value: number
    },
    attackSpeed: {
        value: number
    },
    critChance: {
        value: number
    },
    attack: {
        value: number
    }
};

function calcBaseIntellect(heroProperty: HeroDataWithoutStats) {
    const baseIntellectPoints = attributePoints.Three;
    const heroLevelRoadmap = getLevelsMap(heroProperty.level);
    
    switch(heroProperty.profession) {
        case "BladeDancer":
        case "Warrior":
        case "Hunter": {
            /* 
                They is not getting increment at all
            */
            return baseIntellectPoints;
        };
        case "Paladin": {
            /* 
                Each level increases the attributes of the Paladin:
                    1.) by 2 intellect point(s) - during promotion to an even level and before promotion to level 21
                    2.) by 3 intellect point(s) - during promotion to an even level and after promotion to level 21
                    3.) by 2 intellect point(s) - during promotion to an odd level
            */
            return (attributePoints.Two * heroLevelRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   (attributePoints.Three * heroLevelRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   (attributePoints.Two * heroLevelRoadmap.filter(entryLevel => isOddLevel(entryLevel)).length) +
                   baseIntellectPoints;
        };
        case "Tracker": {
            /* 
                Each level increases the attributes of the Tracker:
                    1.) by 2 intellect point(s) - before promotion to level 21
                    2.) by 2 intellect point(s) - during promotion to an even level and after promotion to level 21
                    3.) by 2 intellect point(s) - during promotion to an odd level and after promotion to level 21
            */
            return (attributePoints.Two * heroLevelRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel)).length) +
                   (attributePoints.Two * heroLevelRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   (attributePoints.Three * heroLevelRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isOddLevel(entryLevel)).length) +
                   baseIntellectPoints;
        };
        case "Mage": {
            /* 
                Each level increases the attribute of the Mage:
                    1.) by 5 intellect point(s) - before promotion to level 21
                    2.) by 3 intellect point(s) - after promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level) 
                ? attributePoints.Five * heroProperty.level
                : (attributePoints.Three * level21Threshold) + (attributePoints.Five * (heroProperty.level - level21Threshold));
        };
    };
};

function calcBaseStrength(heroProperty: HeroDataWithoutStats) {
    const baseStrengthPoints = attributePoints.Four;
    const heroLevelsRoadmap = getLevelsMap(heroProperty.level);

    switch(heroProperty.profession) {
        case "BladeDancer": {
            /*
                Each level increases the attribute of the Blade Dancer:
                    1.) by 3 strength point(s) - during promotion to an odd level or before promotion to level 21
                    2.) by 2 strength point(s) - during promotion to an even level and after promotion to level 21
            */
            return (attributePoints.Three * heroLevelsRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel) || isOddLevel(entryLevel)).length) + 
                   (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   baseStrengthPoints;
        };
        case "Warrior": {
            /* 
                Each level increases the attribute of the Warrior:
                    1.) by 4 strength point(s) - before promotion to level 21
                    2.) by 5 strength point(s) - after promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level) 
                ? attributePoints.Five * heroProperty.level
                : (attributePoints.Four * level21Threshold) + (attributePoints.Five * (heroProperty.level - level21Threshold));
        };
        case "Paladin": {
            /* 
                Each level increases the attributes of the Paladin:
                    1.) by 2 strength point(s) - during promotion to an even level and before promotion to level 21
                    2.) by 2 strength point(s) - during promotion to an even level and after promotion to level 21
                    3.) by 3 strength point(s) - during promotion to an odd level
            */
            return (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) + 
                   (attributePoints.Three * heroLevelsRoadmap.filter(entryLevel => isOddLevel(entryLevel)).length) +
                   baseStrengthPoints;
        };
        case "Tracker":
        case "Hunter":
        case "Mage": {
            /* 
                Each level increases the attributes of the Tracker/Hunter/Mage:
                    1.) by 1 strength point(s) - before promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level)
                ? (attributePoints.One * heroProperty.level) +
                  baseStrengthPoints
                : (attributePoints.One * level21Threshold) +
                  baseStrengthPoints;
        };
    };
};

function calcBaseAgility(heroProperty: HeroDataWithoutStats) {
    const baseAgilityPoints = attributePoints.Three;
    const heroLevelsRoadmap = getLevelsMap(heroProperty.level);

    switch(heroProperty.profession) {
        case "BladeDancer": {
            /*
                Each level increases the attribute of the Blade Dancer:
                    1.) by 2 agility point(s) - during promotion to an odd level or before promotion to level 21
                    2.) by 3 agility point(s) - during promotion to an even level and after promotion to level 21
            */
            return (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel) || isOddLevel(entryLevel)).length) + 
                   (attributePoints.Three * heroLevelsRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   baseAgilityPoints;
        };
        case "Warrior": {
            /* 
                Each level increases the attribute of the Warrior:
                    1.) by 1 agility point(s) - before promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level)
                ? baseAgilityPoints + (attributePoints.One * heroProperty.level)
                : baseAgilityPoints + (attributePoints.One * level21Threshold);
        };
        case "Paladin": {
            /* 
                Each level increases the attributes of the Paladin:
                    1.) by 1 agility point(s) - during promotion to an even level and before promotion to level 21
            */
            return (attributePoints.One * heroLevelsRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) +
                   baseAgilityPoints;
        };
        case "Tracker": {
            /* 
                Each level increases the attributes of the Tracker:
                    1.) by 2 agility point(s) - before promotion to 21 level
                    2.) by 3 agility point(s) - during promotion to an even level and after promotion to 21 level
                    3.) by 2 agility point(s) - during promotion to an odd level and after promotion to 21 level
            */
            return (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isBeforeLevel(level21Threshold, entryLevel)).length) +
                   (attributePoints.Three * heroLevelsRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isEvenLevel(entryLevel)).length) + 
                   (attributePoints.Two * heroLevelsRoadmap.filter(entryLevel => isAfterLevel(level21Threshold, entryLevel) && isOddLevel(entryLevel)).length) +
                   baseAgilityPoints;
        };
        case "Hunter": {
            /* 
                Each level increases the attribute of the Hunter:
                    1.) by 5 agility point(s) - before promotion to level 21
                    2.) by 4 agility point(s) - after promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level) 
                ? attributePoints.Five * heroProperty.level
                : (attributePoints.Four * level21Threshold) + (attributePoints.Five * (heroProperty.level - level21Threshold));
        };
        case "Mage": {
            /* 
                Each level increases the attribute of the Mage:
                    1.) by 1 agility point(s) - before promotion to level 21
            */
            return isBeforeLevel(level21Threshold, heroProperty.level) 
                ? attributePoints.One * heroProperty.level
                : (attributePoints.One * level21Threshold) + baseAgilityPoints;
        };
    };
};

function getHeroStats(heroProperty: HeroDataWithBaseStats) {
    const health = {
        "value": Math.round(
            (statFactors.HpBaseRatio * Math.pow(Math.min(heroProperty.level, 300), statFactors.HpScalingRatio)) + (heroProperty.baseStats.strength.value * statFactors.HpStrengthRatio)
        )
    };

    const attack = {
        "value": isBeforeLevel(level21Threshold, heroProperty.level)
            ? statFactors.AttackBaseRatio + (attributePoints.Two * heroProperty.level)
            : statFactors.AttackBaseRatio + (attributePoints.Two * level21Threshold) + (attributePoints.Three * (heroProperty.level - level21Threshold))
    };
    if(attack.value >= statFactors.AttackMaximumRatio) attack.value = statFactors.AttackMaximumRatio;

    const attackSpeed = {
        "value": Number(
            (Math.min(statFactors.AttackSpeedMultiplyRatio, statFactors.AttackSpeedAgilityRatio * heroProperty.baseStats.agility.value) + Math.max(0, statFactors.AttackSpeedAgilityBonusRatio * (heroProperty.baseStats.agility.value - 100)) + statFactors.AttackSpeedBaseRatio).toFixed(2)
        )
    };

    const critChance = {
        "value": statFactors.CritChanceBaseRatio + statFactors.CritChanceMultiplyRatio * heroProperty.level
    };

    const evadePoints = {
        "value": Math.round(heroProperty.baseStats.agility.value / statFactors.EvadeDivideRatio)
    };
    const evadeChance = {
        "value": Math.round(evadePoints.value * statFactors.EvadeMultiplyRatio / heroProperty.level)
    };

    return {
        evadePoints,
        evadeChance,
        attackSpeed,
        critChance,
        attack,
        health,
    };
};


function getHeroBaseStats(heroProperty: HeroDataWithoutStats) {
    return {
        "intellect": {
            "value": calcBaseIntellect(heroProperty)
        },
        "strength": {
            "value": calcBaseStrength(heroProperty)
        },
        "agility": {
            "value": calcBaseAgility(heroProperty)
        }
    };
};
function getHeroDataset(heroProperty: HeroDataWithoutStats) {
    const heroPropertyWithBaseStats: HeroDataWithBaseStats = {
        ...heroProperty,
        baseStats: getHeroBaseStats(heroProperty)
    };
    const heroPropertyWithAllStats: HeroDataWithAllStats = {
        ...heroPropertyWithBaseStats,
        "stats": getHeroStats(heroPropertyWithBaseStats)
    };
    return heroPropertyWithAllStats;
};

console.log(
    "Blade Dancer (300)",
    getHeroDataset({
        "profession": "BladeDancer",
        "level": 300
    })
);

console.log(
    "Warrior (300)",
    getHeroDataset({
        "profession": "Warrior",
        "level": 300
    })
);

console.log(
    "Paladin (300)",
    getHeroDataset({
        "profession": "Paladin",
        "level": 300
    })
);

console.log(
    "Tracker (300)",
    getHeroDataset({
        "profession": "Tracker",
        "level": 300
    })
);

console.log(
    "Hunter (300)",
    getHeroDataset({
        "profession": "Hunter",
        "level": 300
    })
);

console.log(
    "Mage (300)",
    getHeroDataset({
        "profession": "Mage",
        "level": 300
    })
);
