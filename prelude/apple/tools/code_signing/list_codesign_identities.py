# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

from __future__ import annotations

import subprocess

from abc import ABCMeta, abstractmethod
from typing import List

from .identity import CodeSigningIdentity


class IListCodesignIdentities(metaclass=ABCMeta):
    @abstractmethod
    def list_codesign_identities(self) -> List[CodeSigningIdentity]:
        raise NotImplementedError


class ListCodesignIdentities(IListCodesignIdentities):
    _default_command = ["security", "find-identity", "-v", "-p", "codesigning"]

    def __init__(self, command: List[str]):
        self.command = command

    @classmethod
    def default(cls) -> IListCodesignIdentities:
        return cls(cls._default_command)

    @classmethod
    def override(cls, command: List[str]) -> IListCodesignIdentities:
        return cls(command)

    def list_codesign_identities(self) -> List[CodeSigningIdentity]:
        return _list_identities(self.command)


def _list_identities(
    command: List[str],
) -> List[CodeSigningIdentity]:
    output = subprocess.check_output(
        command,
        encoding="utf-8",
    )
    return CodeSigningIdentity.parse_security_stdout(output)
