---
title: Bug Fix - Fix initial login error
description: Quidem magni aut exercitationem maxime rerum eos.
---

Fixed a bug that didn't log the user in properly when they first signed up with their google account and redirected them back to the login page. The error was from a bug in the scope of the database function that upserted the user into the MongoDB database.